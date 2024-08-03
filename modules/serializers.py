from rest_framework import serializers
from .models import TrainingModule

class TrainingModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingModule
        fields = ['id', 'title', 'description', 'author', 'document', 'created_at', 'updated_at', 'color']
