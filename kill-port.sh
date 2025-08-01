#!/bin/bash

# Script to kill processes running on specific ports
# Usage: ./kill-port.sh [port_number]

PORT=${1:-5001}  # Default to port 5001 if no argument provided

echo "🔍 Looking for processes on port $PORT..."

# Find processes using the port
PIDS=$(lsof -ti:$PORT)

if [ -z "$PIDS" ]; then
    echo "✅ No processes found running on port $PORT"
    exit 0
fi

echo "📋 Found processes: $PIDS"

# Kill the processes
echo "💀 Killing processes..."
kill -9 $PIDS

# Verify they're gone
sleep 1
REMAINING=$(lsof -ti:$PORT)

if [ -z "$REMAINING" ]; then
    echo "✅ Successfully killed all processes on port $PORT"
else
    echo "⚠️  Some processes may still be running: $REMAINING"
fi
