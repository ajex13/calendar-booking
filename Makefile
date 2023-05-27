ifneq (,$(wildcard ./.env))
	include .env
	export
endif

SHELL := bash
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
RESET  := $(shell tput -Txterm sgr0)
.DEFAULT_GOAL := help

POSTGRES_VERSION=12
DB_IMAGE=bitnami/postgresql:$(POSTGRES_VERSION)
DB_CONTAINER_NAME= cal-book-db

help: 
	@echo 'Usage:'
	@echo '  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  ${YELLOW}%-24s${GREEN}%s${RESET}\n", $$1, $$2}' $(MAKEFILE_LIST)

db_up: ## starts postgres database in a container
	docker run -d \
		--name $(DB_CONTAINER_NAME) \
		-p $(POSTGRESQL_PORT):5432 \
		-e POSTGRESQL_POSTGRES_PASSWORD=$(POSTGRESQL_POSTGRES_PASSWORD) \
		-e POSTGRESQL_USERNAME=$(POSTGRESQL_USERNAME) \
		-e POSTGRESQL_PASSWORD=$(POSTGRESQL_PASSWORD) \
		-e POSTGRESQL_DATABASE=$(POSTGRESQL_DATABASE) \
		$(DB_IMAGE); \

db_psql: ## psql
	docker exec \
		-e PGPASSWORD=$(POSTGRESQL_PASSWORD) \
		-it $(DB_CONTAINER_NAME) psql \
		-U $(POSTGRESQL_USERNAME) \
		-d $(POSTGRESQL_DATABASE)

db_down: ## stops postgres database container
	docker stop $(DB_CONTAINER_NAME)

db_nuke: ## nukes postgres database container
	docker rm --force $(DB_CONTAINER_NAME)

db_logs: ## logs db server
	docker logs -f pnp-db