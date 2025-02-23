.PHONY: start build-server build-server-fcgi test docker-start docker-stop

# List all make commands
default:
	@grep '^[^#[:space:]\.].*:' Makefile

# Start go server
start:
	@CGO_ENABLED=0 go run cmd/server/main.go

build-server:
	@CGO_ENABLED=0 go build -o server cmd/server/main.go

build-server-fcgi:
	@CGO_ENABLED=0 go build -o cmd/server-fcgi/static/app.fcgi cmd/server-fcgi/main.go

lint-test:
	@gofmt -d .
	@staticcheck ./...
lint:
	@gofmt -w .
	@staticcheck ./...

# Run all go tests
test:
	@go test ./...

coverage:
	go test -cover ./...

generate-fake-data:
	go run cmd/generate-fake-data/main.go

generate-fake-data-500:
	go run cmd/generate-fake-data/main.go 500

stripe-dev:
	stripe listen --forward-to localhost:8084/v2/payment/webhook

docker-start:
	@cd docker; docker compose up -d
docker-stop:
	@cd docker; docker compose down

firebase-migrate:
	@go run cmd/firebase-migrate/main.go
spreadsheet-migrate:
	@go run cmd/spreadsheet-migrate/main.go
