# Strapi CMS Boilerplate 🚀

A robust, production-ready Strapi CMS boilerplate with Docker support, AWS S3 integration, flexible API configurations, comprehensive testing, and CI/CD pipeline.

## Features

- ⚡ **Latest Strapi v5.20.0** - Built with the latest stable version
- 🐳 **Docker Support** - Complete Docker setup for development and production
- 🌍 **Environment-Based Configuration** - All settings configurable via environment variables
- 📸 **AWS S3 Media Storage** - Pre-configured S3 integration for media uploads
- 🔄 **Flexible API** - Easy toggle between REST and GraphQL APIs
- 🧪 **Testing Framework** - Jest setup with sample tests and coverage reports
- 🔄 **CI/CD Pipeline** - GitHub Actions workflow for automated testing and deployment
- 🔒 **Security** - CORS configuration and security best practices
- 📖 **Comprehensive Documentation** - Complete setup and usage instructions

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm 6+
- Docker & Docker Compose (optional)

### Local Development

1. **Clone and setup**
   ```bash
   git clone <repository-url>
   cd strapi-boilerplate
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server**
   ```bash
   npm run develop
   ```

4. **Access your application**
   - Admin Panel: http://localhost:1337/admin
   - API: http://localhost:1337/api

### Docker Development

1. **Development with hot reload**
   ```bash
   npm run docker:dev
   ```

2. **Production build**
   ```bash
   npm run docker:build
   ```

3. **Stop containers**
   ```bash
   npm run docker:down
   ```

## Environment Configuration

### Required Environment Variables

Copy `.env.example` to `.env` and configure the following:

#### Application Settings
```env
APP_NAME=strapi-boilerplate
NODE_ENV=development
HOST=0.0.0.0
PORT=1337
```

#### Database Configuration
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
```

#### Security Keys
⚠️ **Generate new keys for production!**
```env
JWT_SECRET=your-jwt-secret
ADMIN_JWT_SECRET=your-admin-jwt-secret
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-token-salt
TRANSFER_TOKEN_SALT=your-transfer-token-salt
ENCRYPTION_KEY=your-encryption-key
```

#### AWS S3 Configuration
```env
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name
```

#### CORS Settings
```env
CORS_ENABLED=true
CORS_ORIGIN=http://localhost:3000,http://localhost:1337
```

## API Configuration

### Toggle Between REST and GraphQL

**Enable GraphQL:**
```bash
npm run api:graphql
```

**Enable REST (default):**
```bash
npm run api:rest
```

After switching APIs, restart your Strapi server.

### GraphQL Endpoints
When GraphQL is enabled:
- GraphQL Endpoint: `http://localhost:1337/graphql`
- GraphQL Playground: Available in development mode

### REST Endpoints
Default REST API endpoints:
- Users: `http://localhost:1337/api/users`
- Auth: `http://localhost:1337/api/auth/local`

## Testing

### Run Tests
```bash
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Test Structure
- `tests/setup.ts` - Test environment setup
- `tests/health.test.ts` - Health check tests
- `tests/auth.test.js` - Authentication tests

## AWS S3 Media Management

### Setup S3 Bucket

1. Create an S3 bucket in AWS
2. Configure bucket permissions for public read access (if needed)
3. Create IAM user with S3 access permissions
4. Add credentials to your `.env` file

### Upload Size Limits

Configure via environment variables:
```env
UPLOAD_SIZE_LIMIT=50
UPLOAD_SIZE_UNIT=MB
```

## Docker Configuration

### Development
- `Dockerfile.dev` - Development image with hot reload
- `docker-compose.dev.yml` - Development services with PostgreSQL

### Production
- `Dockerfile` - Production-optimized image
- `docker-compose.yml` - Production services

### Docker Commands
```bash
npm run docker:dev    # Start development environment
npm run docker:build  # Build and start production environment
npm run docker:down   # Stop all containers
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run develop` | Start development server with auto-reload |
| `npm run start` | Start production server |
| `npm run build` | Build admin panel |
| `npm run api:graphql` | Enable GraphQL API |
| `npm run api:rest` | Enable REST API |
| `npm test` | Run tests |
| `npm run test:coverage` | Run tests with coverage |
| `npm run docker:dev` | Start Docker development environment |
| `npm run docker:build` | Build Docker production environment |

## CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow:

### Automated Checks
- **Testing** - Runs Jest tests with PostgreSQL
- **Security** - npm audit and dependency checks
- **Docker Build** - Validates Docker image builds
- **Code Coverage** - Uploads coverage reports

### Deployment
- **Staging** - Auto-deploy on `develop` branch
- **Production** - Auto-deploy on `main` branch

### Setup
1. Enable GitHub Actions in your repository
2. Configure deployment secrets in GitHub repository settings
3. Customize deployment steps in `.github/workflows/ci.yml`

## Security Best Practices

- ✅ Environment variables for all sensitive data
- ✅ CORS configuration
- ✅ Secure Docker images with non-root users
- ✅ npm audit integration in CI/CD
- ✅ Dependabot for dependency updates

## Project Structure

```
strapi-boilerplate/
├── .github/
│   ├── workflows/ci.yml          # GitHub Actions CI/CD
│   └── dependabot.yml            # Dependency updates
├── config/                       # Strapi configuration
│   ├── admin.ts                  # Admin panel config
│   ├── api.ts                    # API config
│   ├── database.ts               # Database config
│   ├── middlewares.ts            # Middleware config
│   ├── plugins.ts                # Plugins config (S3, GraphQL)
│   └── server.ts                 # Server config
├── scripts/
│   └── toggle-graphql.js         # API switching script
├── src/                          # Application source
├── tests/                        # Test files
├── docker-compose.yml            # Production Docker setup
├── docker-compose.dev.yml        # Development Docker setup
├── Dockerfile                    # Production Docker image
├── Dockerfile.dev                # Development Docker image
├── jest.config.js                # Jest configuration
└── .env.example                  # Environment variables template
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using port 1337
   lsof -i :1337
   # Kill the process or change PORT in .env
   ```

2. **Database connection issues**
   - Verify database credentials in `.env`
   - Ensure PostgreSQL is running (if using Docker, check container status)

3. **S3 upload failures**
   - Verify AWS credentials and permissions
   - Check bucket name and region configuration

4. **Docker build issues**
   - Clear Docker cache: `docker system prune -a`
   - Check Docker daemon is running

### Getting Help

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Community Discord](https://discord.strapi.io)
- [GitHub Issues](https://github.com/strapi/strapi/issues)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run tests and ensure they pass
6. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Built with ❤️ using Strapi v5.20.0**
