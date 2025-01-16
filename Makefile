-include .env


info:
	echo "[!! You runs make command with no targets. You must specify target after 'make'. For example 'make all' !!]" && \
	echo "Available targets: all; update; build; run; down; generate-certs; renew-certs; generate-certs; setup-ci; install-docker-if-not-exists; set-docker-not-sudo; setup-env-file."

build:
	echo "[Make]: Running 'build' target in Makefile..." && \
  cd docker-deploy && \
  docker compose --env-file ../.env --progress=plain build --no-cache nginx;
run:
	echo "[Make]: Running 'run' target in Makefile..." && \
  cd docker-deploy && \
  docker compose --env-file ../.env down && \
  docker compose --env-file ../.env up -d nginx;
down:
	echo "[Make]: Running 'down' target in Makefile..." && \
  cd docker-deploy && \
  docker compose --env-file ../.env down;

generate-certs:
	echo "[Make]: Running 'generate-certs' target in Makefile..." && \
  bash ./docker-deploy/scripts/generate-certs.sh
renew-certs:
	echo "[Make]: Running 'renew-certs' target in Makefile..." && \
  cd docker-deploy && \
  docker compose run --rm certbot renew
setup-auto-renewing-certs:
	echo "[Make]: Running 'setup-auto-renewing-certs' target in Makefile..." && \
  bash ./docker-deploy/scripts/setup-auto-renewing-certs.sh

update:
	echo "[Make]: Running 'update' target in Makefile..." && \
  bash ./docker-deploy/scripts/update-deploy.sh

setup-ci:
	echo "[Make]: Running 'setup-ci' target in Makefile..." && \
  bash ./docker-deploy/scripts/setup-ci.sh
	bash ./docker-deploy/scripts/show-variables-to-github-ci.sh

install-docker-if-not-exists:
	echo "[Make]: Running 'install-docker-if-not-exists' target in Makefile..." && \
  bash ./docker-deploy/scripts/install-docker-if-not-exists.sh

set-docker-not-sudo:
	echo "[Make]: Running 'set-docker-not-sudo' target in Makefile..." && \
  bash ./docker-deploy/scripts/set-docker-not-sudo.sh

setup-env-file:
	echo "[Make]: Running 'setup-env-file' target in Makefile..." && \
  bash ./docker-deploy/scripts/setup-env-file.sh

all:
	echo "[Make]: Running 'all' target in Makefile..." && \
  make install-docker-if-not-exists
	make setup-env-file
	make generate-certs
	make setup-auto-renewing-certs
	make down
	make setup-ci
	make update
