from django.shortcuts import render
from rest_framework import generics
from .models import (
    TrainingModule,
    ActivityModule,
    UserActivityModule,
    UserModule,
    SurveyModule,
    UserSurveyModule,
)
from .serializers import (
    TrainingModuleSerializer,
    ActivityModuleSerializer,
    UserActivityModuleSerializer,
    UserModuleSerializer,
    SurveyModuleSerializer,
    UserSurveyModuleSerializer,
)


class TrainingModuleListCreateView(generics.ListCreateAPIView):
    queryset = TrainingModule.objects.all()
    serializer_class = TrainingModuleSerializer

    
class TrainingModuleListView(generics.ListAPIView):
    queryset = TrainingModule.objects.all()
    serializer_class = TrainingModuleSerializer

class TrainingModuleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TrainingModule.objects.all()
    serializer_class = TrainingModuleSerializer


class ActivityModuleListCreateView(generics.ListCreateAPIView):
    queryset = ActivityModule.objects.all()
    serializer_class = ActivityModuleSerializer


class ActivityModuleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ActivityModule.objects.all()
    serializer_class = ActivityModuleSerializer


class UserActivityModuleListCreateView(generics.ListCreateAPIView):
    queryset = UserActivityModule.objects.all()
    serializer_class = UserActivityModuleSerializer


class UserActivityModuleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserActivityModule.objects.all()
    serializer_class = UserActivityModuleSerializer


class UserModuleListCreateView(generics.ListCreateAPIView):
    queryset = UserModule.objects.all()
    serializer_class = UserModuleSerializer


class UserModuleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserModule.objects.all()
    serializer_class = UserModuleSerializer


class SurveyModuleListCreateView(generics.ListCreateAPIView):
    queryset = SurveyModule.objects.all()
    serializer_class = SurveyModuleSerializer


class SurveyModuleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SurveyModule.objects.all()
    serializer_class = SurveyModuleSerializer


class UserSurveyModuleListCreateView(generics.ListCreateAPIView):
    queryset = UserSurveyModule.objects.all()
    serializer_class = UserSurveyModuleSerializer


class UserSurveyModuleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserSurveyModule.objects.all()
    serializer_class = UserSurveyModuleSerializer
