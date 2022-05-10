from django.db import models

# Create your models here.


class User(models.Model):
    login = models.CharField("Login", max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.login, self.email, self.password