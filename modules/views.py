from django.shortcuts import render
from rest_framework import generics
from .models import TrainingModule
from .serializers import TrainingModuleSerializer

class TrainingModuleListCreateView(generics.ListCreateAPIView):
    queryset = TrainingModule.objects.all()
    serializer_class = TrainingModuleSerializer

class TrainingModuleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TrainingModule.objects.all()
    serializer_class = TrainingModuleSerializer
