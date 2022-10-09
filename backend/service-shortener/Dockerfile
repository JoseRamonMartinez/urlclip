FROM golang:latest

WORKDIR /app

COPY go.mod .

COPY go.sum .

RUN go mod download

COPY . .

ENV URL_DB=<URL_DB>
ENV MONGO_URL=<MONGO_URL>
ENV MONGO_DB=<MONGO_DB>
ENV MONGO_TIMEOUT=<MONGO_TIMEOUT>
ENV PORT=<PORT>

RUN go build

EXPOSE 8080

CMD ["./service-shortener"]
