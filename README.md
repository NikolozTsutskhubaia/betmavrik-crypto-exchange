# BetMavrik Test

This repository contains the BetMavrik test project, a Next.js application packaged as a Docker container.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Building the Docker Image](#building-the-docker-image)
- [Running the Docker Container](#running-the-docker-container)
- [Kubernetes Deployment](#kubernetes-deployment)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- Docker Desktop (https://www.docker.com/products/docker-desktop)
- Node.js (https://nodejs.org/) (for local development)
- kubectl (https://kubernetes.io/docs/tasks/tools/) (for Kubernetes commands)

## Getting Started

1. Clone the repository to your local machine:

   git clone https://github.com/yourusername/betmavrik-test.git
   cd betmavrik-test

2. Install dependencies (if running locally):

   npm install

## Building the Docker Image

To build the Docker image for the application, navigate to the src directory and run the following command:

cd src
docker build -t betmavrik-test .

## Running the Docker Container

After successfully building the image, you can run the Docker container with the following command:

docker run -p 3000:3000 betmavrik-test

Now, you can access the application at http://localhost:3000.

## Kubernetes Deployment

If you want to deploy the application using Kubernetes, follow these steps:

1. Ensure Kubernetes is enabled in Docker Desktop.

2. Navigate to the kubernetes directory:

   cd kubernetes

3. Apply the deployment and service configurations:

   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml

4. Access the application:

   The application will be accessible at http://localhost:30001 (or the port specified in your service configuration).

