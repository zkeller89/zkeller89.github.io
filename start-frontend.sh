#!/bin/bash

# Start React frontend on port 3000
cd frontend

# Explicitly set React port and disable browser auto-open
export PORT=3000
export BROWSER=none

echo "Starting React frontend on port 3000..."
npm start
