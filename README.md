# Django Blog Engine

This is a simple blog engine built with Django for the backend and Bootstrap for the frontend.

## Features

- List blog posts
- View blog post details
- Admin interface to manage posts

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/django-blog-engine.git
    cd django-blog-engine
    ```

2. Create a virtual environment and install dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Apply migrations:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

4. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

5. Run the development server:
    ```bash
    python manage.py runserver
    ```

6. Open your browser and go to `http://127.0.0.1:8000/` to view the blog.

## License

This project is licensed under the MIT License.
