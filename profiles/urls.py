from django.urls import path
from .views import CreateUserView, UserListView, InstitutionDetailView, InstitutionListView,RoleListView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('', UserListView.as_view(), name='user-list'),
    path('register/', CreateUserView.as_view(), name='register'),
    path('roles/',RoleListView.as_view(),name="roles-list"),
    path('login/', obtain_auth_token, name='login'),
    path('institutions/', InstitutionListView.as_view(), name='institution-list'),
    path('institutions/<int:pk>/', InstitutionDetailView.as_view(), name='institution-detail'),
]
