from django.urls import path

from .views import login, signup, home

urlpatterns = [
    path("login", login),
    path("signup", signup),
    path("home", home)
]