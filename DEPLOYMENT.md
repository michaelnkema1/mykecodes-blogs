# Deployment Guide

## Quick Deployment Options

### Option 1: Railway (Recommended - Free)
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will automatically detect Django and deploy
6. Add environment variables in Railway dashboard:
   - `DEBUG=False`
   - `SECRET_KEY=your-secret-key`
   - `ALLOWED_HOSTS=your-app-name.railway.app`

### Option 2: Render (Free tier available)
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Set build command: `pip install -r requirements.txt && python manage.py migrate`
6. Set start command: `gunicorn blog_project.wsgi`
7. Add environment variables

### Option 3: Heroku (Paid)
1. Install Heroku CLI
2. Run: `heroku create your-app-name`
3. Run: `git push heroku master`
4. Run: `heroku run python manage.py migrate`
5. Set environment variables

## Frontend Configuration

After deploying backend, update your Vercel environment variables:
1. Go to Vercel dashboard → Your project → Settings → Environment Variables
2. Add: `REACT_APP_API_URL=https://your-backend-url.com/api/`
3. Redeploy your frontend

## Testing
1. Test authentication: Try creating an account
2. Test blog loading: Check if posts appear on home page
3. Test CORS: Ensure frontend can communicate with backend
