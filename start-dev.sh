#!/bin/bash

# Start development servers for personal website
# This script starts both the Flask backend and React frontend

echo "🚀 Starting Personal Website Development Servers..."
echo ""

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "❌ uv is not installed. Please install it first:"
    echo "   curl -LsSf https://astral.sh/uv/install.sh | sh"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

echo "📦 Installing Python dependencies..."
uv sync

echo "📦 Installing Node.js dependencies..."
cd frontend && npm install && cd ..

echo ""
echo "🌐 Starting servers..."
echo "   Backend (Flask): http://localhost:5001"
echo "   Frontend (React): http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Export environment variables for Flask backend
export FLASK_ENV=development
export PORT=5001

# Start both servers using npm script
# React will use PORT=3000 from frontend/.env
npm run dev
