from flask import Flask

app = Flask(__name__)


@app.route("/login", methods=["POST"])
def members():
    """Login function"""
    return {"token": "dhafkjahlfashfahdalbksdk431243"}


if __name__ == "__main__":
   app.run(debug=True)