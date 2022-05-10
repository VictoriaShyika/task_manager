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
        "name": "vika",
        "email": "ajax2@gmail.com",
        "password": "123",
        "tokens": []
    }
    ]
}


@api_view(["POST"])
def login(request):
    """Login function"""
    current_user = None
    request_json = request.data
    login = request_json.get("email")
    password = request_json.get("password")
    for user in DATABASE["users"]:
        if user["email"] == login or user["name"] == login:
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


@api_view(["POST"])
def signup(request):
    """Sign Up function"""

    request_json = request.POST
    name = request_json.get("name")
    email = request_json.get("email")
    password = request_json.get("password")
    token = random.randint(100000, 10000000)
    DATABASE["users"].append({
        "name": name,
        "email": email,
        "password": password,
        "tokens": [token]
    })

    print("DATABASE = ", DATABASE)
    return Response({
        "success": True,
        "token": token
    })


# @app.route("/home", methods=["GET"])
@api_view(["GET"])
def home(request):
    return Response({"text": "This page need to show your Tasks"})
