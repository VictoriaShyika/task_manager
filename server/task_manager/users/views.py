import random

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import User
from .serializers import *


DATABASE = {
    "users": [{
        "name": "Vitalii",
        "email": "ajax@gmail.com",
        "password": "ajax",
        "tokens": []
    }, {
        "name": "Vika",
        "email": "ajax2@gmail.com",
        "password": "qwerty",
        "tokens": []
    }
    ]
}


@api_view(["POST"])
def login(request):
    """Login function"""
    print("GOOOD")
    current_user = None
    request_json = request.POST
    email = request_json.get("email")
    password = request_json.get("password")
    for user in DATABASE["users"]:
        if user["email"] == email:
            current_user = user
            break
    if not current_user:
        return Response({
                   "success": False,
                   "error_message": "This login isn't exist"
               }, status=200)
    if current_user["password"] != password:
        return Response({
                   "success": False,
                   "error_message": "Invalid password"
               }, status=200)
    else:
        token = random.randint(100000, 10000000)
        return Response({
            "success": True,
            "token": token
        })