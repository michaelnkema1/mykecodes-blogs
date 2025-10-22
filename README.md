# MykeCodes Blog Website

A modern, full-stack blog application built with Django REST Framework backend and React frontend with Material-UI.

## Features

### Backend (Django)
- **RESTful API** with Django REST Framework
- **User Authentication** with token-based authentication
- **Blog Post Management** with full CRUD operations
- **Admin Interface** for content management
- **CORS Support** for frontend integration
- **SQLite Database** (easily configurable for production)

### Frontend (React)
- **Modern UI** with Material-UI components
- **Responsive Design** that works on all devices
- **User Authentication** with login/signup
- **Blog Post Creation** and viewing
- **User Profile Management**
- **Real-time API Integration**

## Tech Stack

### Backend
- Django 5.0.6
- Django REST Framework 3.15.2
- Django CORS Headers 4.3.1
- SQLite (development) / PostgreSQL (production ready)

### Frontend
- React 19.1.0
- Material-UI 7.1.0
- React Router DOM 7.6.1
- Axios 1.9.0

## Project Structure

```
Blog-Engine/
├── blog/                    # Django app
│   ├── models.py           # Post model
│   ├── views.py            # API views and template views
│   ├── serializers.py      # DRF serializers
│   ├── urls.py             # URL routing
│   ├── admin.py            # Admin configuration
│   └── templates/          # Django templates
├── blog_project/           # Django project settings
│   ├── settings.py         # Main settings
│   └── urls.py             # Root URL configuration
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context (Auth)
│   │   ├── services/      # API service
│   │   └── App.js         # Main App component
│   └── package.json       # Frontend dependencies
├── static/                # Static files (CSS, JS)
├── requirements.txt       # Python dependencies
└── manage.py             # Django management script
```

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Blog-Engine
   ```

2. **Create and activate virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser:**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the Django server:**
   ```bash
   python manage.py runserver
   ```

The backend will be available at `http://localhost:8001`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `POST /api/auth/logout/` - User logout (requires authentication)

### Blog Posts
- `GET /api/posts/` - List all posts
- `POST /api/posts/` - Create new post (requires authentication)
- `GET /api/posts/{id}/` - Get specific post
- `PUT /api/posts/{id}/` - Update post (requires authentication)
- `DELETE /api/posts/{id}/` - Delete post (requires authentication)

## Usage

### For Users
1. **Sign up** for a new account or **log in** with existing credentials
2. **Browse posts** on the home page
3. **Read full posts** by clicking "Read More"
4. **Create new posts** (requires login)
5. **Manage profile** information

### For Administrators
1. **Access Django Admin** at `http://localhost:8001/admin/`
2. **Manage users** and **blog posts**
3. **Monitor site activity**

## Development

### Adding New Features

1. **Backend Changes:**
   - Add new models in `blog/models.py`
   - Create serializers in `blog/serializers.py`
   - Add views in `blog/views.py`
   - Update URLs in `blog/urls.py`

2. **Frontend Changes:**
   - Add new components in `frontend/src/components/`
   - Create new pages in `frontend/src/pages/`
   - Update routing in `frontend/src/App.js`

### Database Management

- **Create migrations:** `python manage.py makemigrations`
- **Apply migrations:** `python manage.py migrate`
- **Reset database:** Delete `db.sqlite3` and run migrations again

## Production Deployment

### Backend
1. Set `DEBUG = False` in settings
2. Configure production database (PostgreSQL recommended)
3. Set up static file serving
4. Configure CORS for production domain
5. Use environment variables for sensitive data

### Frontend
1. Build production version: `npm run build`
2. Serve static files through Django or CDN
3. Configure API base URL for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or contact the development team.
