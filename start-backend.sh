#!/bin/bash

# Start Flask backend on port 5001
export FLASK_ENV=development
export PORT=5001

echo "Starting Flask backend on port 5001..."
uv run python backend/app.py
