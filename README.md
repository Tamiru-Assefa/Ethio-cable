# EthioCable

A lightweight management platform for cable-TV and internet service operations (billing, subscriptions, customers, meters, and reporting).

## Features
- Customer and subscription management
- Billing and payment history
- Service activation/deactivation
- Usage and revenue reports
- Role-based access (admin, operator)

## Requirements
- Git
- Node.js 16+ or Python 3.9+ (project language/runtime depends on implementation)
- PostgreSQL (or other SQL database) recommended
- Docker (optional)

## Quick Start
1. Clone repository
    git clone https://github.com/your-org/ethiocable.git
    cd ethiocable
2. Install dependencies
    - Node: npm install
    - Python: pip install -r requirements.txt
3. Create environment file
    cp .env.example .env
    Edit .env with DB credentials and settings.
4. Database
    Run migrations and seeders (adjust commands for your stack)
    - Node/TypeORM: npm run typeorm:migrate && npm run seed
    - Django: python manage.py migrate && python manage.py loaddata initial_data
5. Start app
    npm start
    or
    python manage.py runserver

## Environment (example)
ENV=development
PORT=3000
DATABASE_URL=postgres://user:pass@localhost:5432/ethiocable
SECRET_KEY=change_this
SMTP_HOST=smtp.example.com
SMTP_USER=user
SMTP_PASS=pass

## Docker
Build and run with Docker Compose:
docker-compose up --build

## Testing
Run test suite:
npm test
or
pytest

## Contributing
- Fork repository
- Create feature branch
- Open a pull request with clear description and tests
Follow code style and add changelog entries when applicable.

## License
MIT — see LICENSE file.

## Contact
Project maintainer: maintainer@example.com