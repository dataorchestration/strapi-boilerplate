# Strapi Framework Boilerplate Prompt

Generate a robust, customizable Strapi CMS boilerplate repository optimized for rapid development of diverse CMS applications with the following key setup and configuration:

## Requirements

### 1. Core Setup

* Latest stable version of Strapi (v4.x or higher).
* Project/application name configurable via environment variables.

### 2. Dockerized Local Development

* Include a Dockerfile and docker-compose setup optimized for local development.
* Configure CORS middleware, allowing flexibility through environment variables.

### 3. Environment-Based Configurations

* All project-specific Strapi configurations should be managed via environment variables, ensuring:

  * Database connection details
  * Security credentials (API tokens, keys)
  * Server host and port settings
  * Any Strapi-specific settings

### 4. Media Management

* AWS S3 plugin configured for media uploads:

  * AWS credentials and bucket configurations via environment variables
  * Media upload size limit controlled through an environment variable

### 5. Flexible API Setup

* Ability for the user to choose between GraphQL or traditional REST API.

  * Setup instructions or scripts to easily toggle between REST API and GraphQL

### 6. Testing and CI/CD

* Include testing framework setup (e.g., Jest or Mocha) with initial sample tests.
* GitHub Actions workflow integrated for automated:

  * Tests execution
  * Docker image building
  * Deployment readiness checks

### 7. Documentation

* Clear README.md file outlining:

  * Installation steps
  * Environment variables configuration instructions
  * Instructions for switching between GraphQL and REST API setups
  * Local Docker-based development workflow
  * Testing guidelines

## Deliverables

The repository generated from this prompt should be clean, structured, and production-grade, suitable as a foundational framework for building and scaling various CMS-based applications with Strapi.

