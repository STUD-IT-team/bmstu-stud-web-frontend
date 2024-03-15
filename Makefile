#TAG ?= $(shell git symbolic-ref -q --short HEAD || git describe --tags --exact-match)
-include ./docker-deploy/.env

build:
	cd docker-deploy && \
	docker compose build --no-cache --progress=plain nginx
run:
	cd docker-deploy && \
	docker compose down && \
	docker compose up -d nginx
down:
	cd docker-deploy && \
	docker compose down

generate-certs:
	cd docker-deploy && \
	docker compose down && \
	docker compose up -d nginx-certbot && \
	docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d $(DOMAIN_URL)
renew-certs:
	cd docker-deploy && \
	docker compose run --rm certbot renew
set-auto-renewing-certs:
	sudo apt-get update
	sudo apt-get install cron
	echo "----------------------------------------------------------------------------------------------" && \
	echo "Now you must add this string-command in your crontab to auto executing it each 1 month. Command:" && \
	echo "" && \
	echo "0 0 1 * * cd $$(pwd) && make run renew-certs >> ./certbot-renew.log" && \
	echo "" && \
	echo "Copy that command and [press Enter]. Then add this string in end of opened file." && \
	read ENTER
	crontab -e

update:
	git fetch --all
	git reset --hard origin/master
	git log --oneline -1
	cd docker-deploy && \
	docker compose up -d nginx --build
	echo "Frontend updated successfully"

setup-ci:
	#id -u github &>/dev/null || sudo adduser github # Add user if not exists
	#sudo chown -R github:legend .
	#sudo -u github ssh-keygen
	#sudo cat /home/github/.ssh/id_rsa.pub >> /home/github/.ssh/authorized_keys
	#sudo chmod 777 -R /home/github/.ssh
	#sudo chmod 666 /home/github/.ssh/authorized_keys
	#sudo -u github ssh-keygen
	#echo "" && \
#	echo 'Add this politics for github user: [press Enter]' && \
#	echo 'AllowUsers github' && \
#	echo 'Match User github' && \
#	echo 'PasswordAuthentication no' && \
#    echo 'AllowTCPForwarding no' && \
#    echo 'X11Forwarding no' && \
#    echo '[press Enter...]' && \
#	read ENTER
	#nano /etc/ssh/sshd_config
	#echo "" && \
#	echo 'Add this public rsa key to Deploy keys in your github directory: ' && \
#	sudo cat /home/github/.ssh/id_rsa.pub
	ssh-keygen -f /tmp/tmp_key
	sudo mkdir -p ~/.ssh
	sudo cat /tmp/tmp_key.pub >> ~/.ssh/authorized_keys
	echo '' && \
	echo 'Add this private rsa key secret deploy environment variables to SSH_DEPLOY_KEY on your github repo: ' && \
	echo '[To see key press Enter...]' && \
	read ENTER
	sudo less /tmp/tmp_key

install-docker-if-not-exists: # fully copied from https://docs.docker.com/engine/install/ubuntu/
	if ! command -v docker; then \
		sudo apt-get update; \
		sudo apt-get install -y --no-install-recommended ca-certificates curl; \
		sudo install -m 0755 -d /etc/apt/keyrings; \
		sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc; \
		sudo chmod a+r /etc/apt/keyrings/docker.asc; \
		# Add the repository to Apt sources: \
		echo \
		  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
		  $(. /etc/os-release && echo "$${VERSION_CODENAME}") stable" | \
		  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null; \
		sudo apt-get update; \
		sudo apt-get install -y --no-install-recommended docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin; \
		make set-docker-not-sudo; \
	else \
	  echo "Docker already installed!"; \
	fi

set-docker-not-sudo:
	# add user to docker group
	getent group docker || sudo groupadd docker # Add group if not exists
	sudo usermod -aG docker ${USER}
	newgrp docker
	sudo systemctl restart docker

setup-env-file:
	cp --no-clobber ./docker-deploy/.env.example ./docker-deploy/.env
	echo '' && \
	echo 'Edit .env file. Write right DOMAIN_URL!' && \
	echo '[press Enter...]' && \
	read ENTER
	nano ./docker-deploy/.env

all:
	make install-docker-if-not-exists
	make setup-env-file
	make generate-certs
	make set-auto-renewing-certs
	make down
	make setup-ci
	sudo chmod ugo+rwx -R ~/docker-deploy/certbot/
	make update
	echo 'Now read README.md and setup another deploy environments variables.' && \
	echo 'It seems like values must be:' && \
	echo 'SERVER_USERNAME=$$(whoami) - [! MUST BE SECRET VARIABLE !]' && \
	echo 'DEPLOY_HOST=$$(cat ./docker-deploy/.env | grep DOMAIN_URL | sed "s/.*=//") - [NOT SECURE]' && \
	echo 'PROJECT_PATH=$$(pwd) - [NOT SECURE]'
