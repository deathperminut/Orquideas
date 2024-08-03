# modules/models.py

from django.db import models
from django.conf import settings

class TrainingModule(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    document = models.FileField(upload_to='modules/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    color = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_at']
