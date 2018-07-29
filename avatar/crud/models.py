from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    owner = models.ForeignKey(User, related_name="notes", on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text

class Avatar(models.Model):
    animal = models.CharField(max_length=255, default="")
    desc = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.animal
