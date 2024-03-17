# models.py

from django.db import models

class Paragraph(models.Model):
    content = models.TextField()

    def __str__(self):
        return self.content[:50]  # Display first 50 characters of content in admin
    
    class Meta:
        app_label = 'app'

class ExtractedInfo(models.Model):
    paragraph = models.ForeignKey(Paragraph, on_delete=models.CASCADE)
    key = models.CharField(max_length=100)
    value = models.TextField()

    def __str__(self):
        return f"{self.key}: {self.value}"  # Display key and value in admin
