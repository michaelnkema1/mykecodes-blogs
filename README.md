# MykeCodes Blog Website

A modern, full-stack blog application built with Django REST Framework backend and React frontend with Material-UI.
This was my first full-stack project

[![Django](https://img.shields.io/badge/Django-5.0.6-green.svg)](https://djangoproject.com/)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.1.0-blue.svg)](https://mui.com/)

## ✨ Features

- **🔐 User Authentication** - Login/signup with token-based auth
- **📝 Blog Management** - Create, read, update, delete posts
- **🎨 Modern UI** - Responsive Material-UI design
- **🔧 Admin Interface** - Django admin for content management
- **📱 Mobile Ready** - Works on all devices
- **🚀 RESTful API** - Complete CRUD operations

## 🚀 Quick Start

### One-Command Setup
```bash
git clone <your-repo-url>
cd Blog-Engine
chmod +x start.sh
./start.sh
```

### 🌐 Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8001/api/
- **Django Admin**: http://localhost:8001/admin/
- **Test User**: username=`testuser`, password=`testpass123`

## 📋 Manual Setup

### Prerequisites
- Python 3.8+
- Node.js 16+

### Backend
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8001
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 🛠️ Tech Stack

**Backend:**
- Django 5.0.6
- Django REST Framework 3.15.2
- SQLite (development)

**Frontend:**
- React 19.1.0
- Material-UI 7.1.0
- Axios 1.9.0

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `POST /api/auth/logout/` - User logout

### Blog Posts
- `GET /api/posts/` - List all posts
- `POST /api/posts/` - Create new post
- `GET /api/posts/{id}/` - Get specific post
- `PUT /api/posts/{id}/` - Update post
- `DELETE /api/posts/{id}/` - Delete post

## 🎯 Usage

1. **Sign up** for a new account or use test credentials
2. **Browse posts** on the home page
3. **Create new posts** (requires login)
4. **Manage content** via Django admin

## 🚀 Deployment

1. Set `DEBUG = False` in Django settings
2. Configure production database (PostgreSQL recommended)
3. Set up static file serving
4. Build React frontend: `npm run build`
5. Configure CORS for production domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Michael Nkema** - [@mykecodes](https://github.com/mykecodes)

---

⭐ **Star this repository if you found it helpful!**
