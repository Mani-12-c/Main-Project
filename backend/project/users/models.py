from django.contrib.auth.models import AbstractUser 
from django.db import models
from django.contrib.auth import get_user_model

# Custom User model
class CustomUser (AbstractUser ):
    phone = models.CharField(max_length=15, unique=True, null=True, blank=True)

# Get the user model
User  = get_user_model()

# Behavior model to track user events
class Behavior(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event_type = models.CharField(max_length=50)  # e.g., "mousemove", "keydown"
    x_position = models.IntegerField(null=True, blank=True)
    y_position = models.IntegerField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.event_type} at {self.timestamp}"