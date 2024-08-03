from django.urls import path
from .views import CreateUserView, UserListView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('', UserListView.as_view(), name='user-list'),
    path('register/', CreateUserView.as_view(), name='register'),
    path('login/', obtain_auth_token, name='login'),
]
