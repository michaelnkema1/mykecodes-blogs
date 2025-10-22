from django.urls import path
from . import views

urlpatterns = [
    # Template views
    path('', views.home, name='home'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    
    # API endpoints
    path('api/posts/', views.PostListCreateView.as_view(), name='api_posts'),
    path('api/posts/<int:pk>/', views.PostDetailView.as_view(), name='api_post_detail'),
    path('api/auth/register/', views.register_user, name='api_register'),
    path('api/auth/login/', views.login_user, name='api_login'),
    path('api/auth/logout/', views.logout_user, name='api_logout'),
]
