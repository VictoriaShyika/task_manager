from flask import Flask

app = Flask(__name__)


@app.route("/login", methods=["POST"])
def members():
    """Login function"""
    return {"token": "dhafkjahlfashfahdalbksdk431243"}

@app.route("/home", methods=["GET"])
def home():
    return {"text": "There some text"}

if __name__ == "__main__":
   app.run(debug=True)