CONTAINER_NAME := pg15
DB_NAME := test_dev

postgres:
	docker run --name ${CONTAINER_NAME} -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine
deletepg:
	docker rm ${CONTAINER_NAME}

createdb: 
	docker exec -it ${CONTAINER_NAME} createdb --username=root --owner=root ${DB_NAME}

dropdb:
	docker exec -it ${CONTAINER_NAME} dropdb ${DB_NAME}

createmg:
	npx node-pg-migrate create cerate-users --migration-file-language=sql

up:
	DATABASE_URL=postgres://root:secret@localhost:5432/test_dev npm run migrate up

down:
	DATABASE_URL=postgres://root:secret@localhost:5432/test_dev npm run migrate down

dev: 
	npm run dev

.PHONEY: postgres, createdb, dropdb, createmg, up, down
