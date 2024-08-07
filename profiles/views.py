from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .models import UserProfile, Institution,Role
from .serializers import UserSerializer, InstitutionSerializer,RoleSelializer
from rest_framework.permissions import AllowAny


class CreateUserView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer

    # def perform_create(self, serializer):
    #     user = serializer.save()
    #     token, created = Token.objects.get_or_create(user=user)
    #     return Response({'token': token.key})




class UserListView(generics.ListAPIView):
    permission_classes = [AllowAny]  # Permite acceso a todos sin autenticación
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer


class InstitutionListView(generics.ListAPIView):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer


class InstitutionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer

class RoleListView(generics.ListAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSelializer