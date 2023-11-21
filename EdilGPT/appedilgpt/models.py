from django.db import models

class EdilModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    class Meta:
        app_label = 'appedilgpt'

    def __str__(self):
        return self.name


