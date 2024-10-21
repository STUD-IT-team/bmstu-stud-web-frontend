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
	bash ./docker-deploy/scripts/generate-certs.sh
renew-certs:
	cd docker-deploy && \
	docker compose run --rm certbot renew
setup-auto-renewing-certs:
	bash ./docker-deploy/scripts/setup-auto-renewing-certs.sh

update:
	bash ./docker-deploy/scripts/update-deploy.sh

setup-ci:
	bash ./docker-deploy/scripts/setup-ci.sh

install-docker-if-not-exists:
	bash ./docker-deploy/scripts/install-docker-if-not-exists.sh

set-docker-not-sudo:
	bash ./docker-deploy/scripts/set-docker-not-sudo.sh

setup-env-file:
	bash ./docker-deploy/scripts/setup-env-file.sh

all:
	make install-docker-if-not-exists
	make setup-env-file
	make generate-certs
	make setup-auto-renewing-certs
	make down
	make setup-ci
	sudo chmod ugo+rwx -R ./docker-deploy/certbot/
	make update
	bash ./docker-deploy/scripts/show-variables-to-github-ci.sh
