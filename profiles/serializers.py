# your_app_name/serializers.py

from rest_framework import serializers
from .models import UserProfile, Institution,Role


class UserUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = ['id', 'email', 'first_name', 'last_name', 'role','is_active']


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'email', 'first_name', 'last_name', 'role', 'password','is_active']
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = ['id', 'name', 'allowed_modules', 'users']

class RoleSelializer(serializers.ModelSerializer):
    class Meta:
        model  =  Role
        fields = ['id','name','description']
