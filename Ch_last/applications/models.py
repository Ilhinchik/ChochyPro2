from django.db import models
from django.contrib.auth.models import User
from users.models import User
# Create your models here.

class Application(models.Model):
    #title = models.CharField(max_length=50) # �������� ������
    discipline = models.CharField(max_length=50)
    reason = models.TextField() # ������� ���������
    details = models.CharField(max_length=50)
    #date = models.DateTimeField(blank=True, null=True) # �����������
    user = models.ForeignKey('users.User', related_name='Applications', on_delete=models.CASCADE)

    def __str__(self):
        return self.discipline
# Create your models here.
