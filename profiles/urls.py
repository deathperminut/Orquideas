from django.urls import path
from .views import CreateUserView, UserListView, InstitutionDetailView, InstitutionListView,RoleListView,UserDetailView,GetUserInfo,CreateInstitution
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('', UserListView.as_view(), name='user-list'),
    path('register/', CreateUserView.as_view(), name='register'),
    path('createInstitution/',CreateInstitution.as_view(),name='createInstitution'),
    path('roles/',RoleListView.as_view(),name="roles-list"),
    path('login/', obtain_auth_token, name='login'),
    path('get-user-info/', GetUserInfo.as_view(), name='get_user_info'),
    path('<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('institutions/', InstitutionListView.as_view(), name='institution-list'),
    path('institutions/<int:pk>/', InstitutionDetailView.as_view(), name='institution-detail'),
]
