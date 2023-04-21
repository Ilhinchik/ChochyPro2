from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    
    username = models.CharField(default=True, max_length=50, unique=True)
    money = models.IntegerField(null=True, blank=True, default=50)
    group = models.CharField(default=True, max_length=50)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

# Create your models here.
# Create your models here.
