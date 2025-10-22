#!/bin/bash

# MykeCodes Blog Website Startup Script
echo "🚀 Starting MykeCodes Blog Website..."

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install Python dependencies
echo "📥 Installing Python dependencies..."
pip install -r requirements.txt

# Run migrations
echo "🗄️ Running database migrations..."
python manage.py makemigrations
python manage.py migrate

# Check if superuser exists, if not create one
echo "👤 Checking for superuser..."
python manage.py shell -c "
from django.contrib.auth.models import User
if not User.objects.filter(is_superuser=True).exists():
    print('Creating superuser...')
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
    print('Superuser created: username=admin, password=admin123')
else:
    print('Superuser already exists')
"

# Start Django server in background
echo "🌐 Starting Django server..."
python manage.py runserver 8001 &
DJANGO_PID=$!

# Wait a moment for Django to start
sleep 3

# Check if frontend dependencies are installed
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
fi

# Start React server
echo "⚛️ Starting React server..."
cd frontend
npm start &
REACT_PID=$!

echo ""
echo "✅ Both servers are starting up!"
echo ""
echo "🌐 Django Backend: http://localhost:8001"
echo "⚛️ React Frontend: http://localhost:3000"
echo "👨‍💼 Django Admin: http://localhost:8001/admin (testuser/testpass123)"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $DJANGO_PID 2>/dev/null
    kill $REACT_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait
