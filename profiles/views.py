from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
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


## CREAMOS UNA VISTA PARA ACTUALIZAR USUARIO:
# Vista para recuperar, actualizar y eliminar un artículo de noticias específico
class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
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


class GetUserInfo(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        token_key = request.GET.get('token', None)
        if not token_key:
            return Response({'error': 'Token is required'}, status=400)
        
        try:
            token = Token.objects.get(key=token_key)
        except Token.DoesNotExist:
            return Response({'error': 'Invalid token'}, status=400)
        
        user = token.user
        user_info = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            # Incluye cualquier otra información que consideres relevante
        }
        
        return Response({'user': user_info})