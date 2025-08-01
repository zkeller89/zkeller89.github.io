#!/bin/bash

# Development linting and formatting script
echo "🔍 Running Python linting and formatting..."

echo "📋 Checking code with ruff..."
uv run ruff check backend/

if [ $? -ne 0 ]; then
    echo "❌ Ruff found issues. Attempting to fix..."
    uv run ruff check backend/ --fix
fi

echo "🎨 Formatting code with ruff..."
uv run ruff format backend/

echo "✅ Linting and formatting complete!"

# Optional: also run black if you prefer it over ruff format
# echo "🎨 Formatting code with black..."
# uv run black backend/

echo ""
echo "💡 To run tests: uv run pytest"
echo "🚀 To start dev servers: ./start-dev.sh"
