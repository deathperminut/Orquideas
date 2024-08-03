from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserSerializer

class CreateUserView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer

    # def perform_create(self, serializer):
    #     user = serializer.save()
    #     token, created = Token.objects.get_or_create(user=user)
    #     return Response({'token': token.key})

class UserListView(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer
