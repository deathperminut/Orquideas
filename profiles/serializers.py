# your_app_name/serializers.py

from rest_framework import serializers
from .models import UserProfile, Institution

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'email', 'first_name', 'last_name', 'role']

class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = ['id', 'name', 'allowed_modules', 'users']
