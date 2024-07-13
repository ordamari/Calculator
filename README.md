# Calculator API

This repository contains a Swagger-generated server for a calculator application.

## Getting Started

Follow the instructions below to build and run the Docker container for this project.

### Prerequisites

-   Docker: Ensure Docker is installed on your machine. You can download it from [Docker's official website](https://www.docker.com).

-   Clone the repository:

```
git clone https://github.com/ordamari/Calculator.git
cd Calculator
```

### Building and Running the Docker Image using Docker Compose

Build and run the Docker container using Docker Compose:

```
docker-compose up --build
```

Verify the application is running by opening your browser and navigating to:

```
http://localhost:8080/docs
```

To stop the running container, use the following command:

```
docker-compose down
```

### Building and Running the Docker Image Manually

Build the Docker image:

```
docker build -t calculator-app .
```

Run the Docker container:

```
docker run -d -p 8080:8080 --name calculator-container calculator-app
```

Verify the application is running by opening your browser and navigating to:

```
http://localhost:8080/docs
```

To stop the running container, use the following command:

```
docker stop calculator-container
```

To remove the container after stopping it, use:

```
docker rm calculator-container
```
