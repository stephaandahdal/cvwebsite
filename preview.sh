#!/bin/bash
# Quick preview script for CV website

cd "$(dirname "$0")"

echo "Starting local server..."
echo "Open http://localhost:8000 in your browser"
echo "Press Ctrl+C to stop"
echo ""

# Try Python first, then fallback to other options
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
elif command -v php &> /dev/null; then
    php -S localhost:8000
else
    echo "Error: No server found. Please install Python or PHP."
    echo "Or use: npx http-server -p 8000"
    exit 1
fi
