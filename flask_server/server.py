import random

from flask import Flask, request

app = Flask(__name__)

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


@app.route("/login", methods=["POST"])
def login():
    """Login function"""

    current_user = None
    request_json = request.get_json(force=True)
    email = request_json.get("email")
    password = request_json.get("password")
    for user in DATABASE["users"]:
        if user["email"] == email:
            current_user = user
            break
    if not current_user:
        return {
            "success": False,
            "error_message": "This login isn't exist"
        }, 400
    if current_user["password"] != password:
        return {
            "success": False,
            "error_message": "Invalid password"
        }, 400
    else:
        token = random.randint(100000, 10000000)
        return {
            "success": True,
            "token": token
        }


@app.route("/signup", methods=["POST"])
def signup():
    """Sign Up function"""

    request_json = request.get_json(force=True)
    name = request_json.get("name")
    email = request_json.get("email")
    password = request_json.get("password")
    DATABASE["users"].append({
        "name": name,
        "email": email,
        "password": password,
        "tokens": []
    })
    token = random.randint(100000, 10000000)
    print(DATABASE)
    return {
        "success": True,
        "token": token
    }


@app.route("/home", methods=["GET"])
def home():
    return {"text": "This page need to show your Tasks"}


if __name__ == "__main__":
    app.run(debug=True)
