# Personal Website

A modern personal website built with Flask backend and React frontend.

## Project Structure

```
├── backend/          # Flask API server
├── frontend/         # React application
├── pyproject.toml   # Python dependencies (uv)
├── uv.lock          # Lockfile for Python dependencies
├── package.json     # Node.js dependencies
└── README.md        # This file
```

## Setup Instructions

### Backend (Flask)
1. Install uv: `curl -LsSf https://astral.sh/uv/install.sh | sh` (or `pip install uv`)
2. Install dependencies: `uv sync`
3. Run the Flask server: `uv run python backend/app.py`

### Frontend (React)
1. Install Node.js dependencies: `npm install`
2. Start the development server: `npm start`

## Features

- **Minimal Design**: Clean black and white aesthetic with sharp, professional styling
- **Flask REST API Backend**: Clean API endpoints for profile and contact
- **UV Package Management**: Fast, modern Python dependency management
- **TypeScript Support**: Full TypeScript implementation with type safety and better IDE support
- **Component-Based Architecture**: Modular React components (Header, About, Contact, Footer)
- **Contact Form**: Working contact form with backend validation and anti-spam captcha
- **CORS Enabled**: Configured for seamless frontend-backend communication
- **Development Ready**: Hot reload for both frontend and backend
- **Production Ready**: Build scripts and deployment configuration

## Development

- Backend runs on `http://localhost:5001`
- Frontend runs on `http://localhost:3000`
- API endpoints are prefixed with `/api`

## Quick Start

```bash
# Clone and setup
git clone <your-repo-url>
cd zkeller89.github.io

# Install uv (if not already installed)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Start development servers
./start-dev.sh
```

## API Endpoints

- `GET /api/profile` - Get personal information
- `GET /api/captcha` - Get math captcha question for contact form
- `POST /api/contact` - Submit contact form (requires captcha validation)

## Customization

1. **Update Personal Info**: Edit the `personal_info` dictionary in `backend/app.py`
2. **Styling**: Customize CSS files in `frontend/src/components/`
3. **Components**: Modify React components in `frontend/src/components/`

## Production Deployment

```bash
# Build React app
cd frontend && npm run build

# The built files will be in frontend/build/
# Deploy backend to your preferred hosting service
# Serve frontend build files with a web server
```

## Development Commands

```bash
# Python linting and formatting
uv run ruff check backend/          # Check for linting issues
uv run ruff check backend/ --fix    # Fix auto-fixable issues
uv run ruff format backend/         # Format code

# Alternative: use black for formatting (if preferred)
uv run black backend/

# Run tests
uv run pytest

# Install dev dependencies
uv sync --extra dev
```

## Troubleshooting

### Port Already in Use
If you get "Address already in use" errors:

```bash
# Kill processes on port 5001 (backend)
./kill-port.sh 5001

# Kill processes on port 3000 (frontend)
./kill-port.sh 3000

# Or manually find and kill processes
lsof -ti:5001 | xargs kill -9  # Kill backend
lsof -ti:3000 | xargs kill -9  # Kill frontend

# Check what's running on a port
lsof -i:5001
```

### Common Commands
```bash
# Start development servers
./start-dev.sh

# Kill processes on default ports
./kill-port.sh

# Lint and format code
./lint.sh
```
