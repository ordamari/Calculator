# Calculator API

This repository contains a Swagger-generated server for a calculator application.

## Getting Started

Follow the instructions below to build and run the Docker container for this project.

### Prerequisites

-   Docker: Ensure Docker is installed on your machine. You can download it from [Docker's official website](https://www.docker.com).

## Easy Setup

Running the Docker image prepared for easy setup:

```
docker run -d -p 8080:8080 ordamari/calculator:latest
```

Swagger will be served at: [http://localhost:8080/docs](http://localhost:8080/docs)

## Running with Docker Compose

Clone the repository:

```
git clone https://github.com/ordamari/Calculator.git
cd Calculator
```

Build and run the Docker container using Docker Compose:

```
docker-compose up -d
```

Swagger will be served at: [http://localhost:8080/docs](http://localhost:8080/docs)

![Swagger image](https://res.cloudinary.com/dif8yy3on/image/upload/v1720880509/nhznoy7xhmezakmf8bff.png)
