from django.urls import path
from .views import TrainingModuleListCreateView, TrainingModuleDetailView

urlpatterns = [
    path('', TrainingModuleListCreateView.as_view(), name='trainingmodule-list-create'),
    path('<int:pk>/', TrainingModuleDetailView.as_view(), name='trainingmodule-detail'),
]
