import random

from flask import Flask, request

app = Flask(__name__)

LOGINS = ["app", "hello", "good"]
PATHWORDS = {
    "app": "123",
    "hello": "321",
    "good": "12345",
}


@app.route("/login", methods=["POST"])
def login():
    """Login function"""

    request_json = request.get_json(force=True)
    login = request_json.get("email")
    password = request_json.get("password")
    if login not in LOGINS:
        return {"error": "This login isn't exist"}, 400
    if PATHWORDS.get(login) != password:
        return {"error": "Invalid password"}, 400
    return {"token": str(random.randint(100000000000000000, 1000000000000000000))}

@app.route("/signup", methods=["POST"])
def signup():
    """Sign Up function"""
    return {"token": "LALALLALALAALLALA"}

@app.route("/home", methods=["GET"])
def home():
    return {"text": "There some text"}


if __name__ == "__main__":
   app.run(debug=True)