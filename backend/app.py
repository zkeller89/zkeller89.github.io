from flask import Flask, jsonify, request, session
from flask_cors import CORS
import os
import random
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "your-secret-key-change-in-production")
CORS(app, supports_credentials=True)  # Enable CORS for React frontend with credentials

# Sample data for the personal website
personal_info = {
    "name": "Zachary Keller",
    "title": "Software Developer",
    "bio": "Passionate developer creating innovative solutions",
    "email": "contact@example.com",
    "location": "Your Location",
    "skills": ["Python", "JavaScript", "React", "Flask", "Node.js"],
    "social": {
        "github": "https://github.com/zkeller89",
        "linkedin": "https://linkedin.com/in/yourprofile",
        "twitter": "https://twitter.com/yourhandle",
    },
}


@app.route("/")
def home():
    return jsonify({"message": "Personal Website API", "status": "running"})


@app.route("/api/profile")
def get_profile():
    """Get personal information"""
    return jsonify(personal_info)





@app.route("/api/captcha")
def get_captcha():
    """Generate a simple math captcha"""
    # Generate two random numbers between 1 and 10
    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)

    # Store the answer in session
    session["captcha_answer"] = num1 + num2

    return jsonify(
        {
            "question": f"What is {num1} + {num2}?",
            "session_id": session.get("_permanent", True),
        }
    )


@app.route("/api/contact", methods=["POST"])
def contact():
    """Handle contact form submissions"""
    data = request.get_json()

    # Basic validation
    if (
        not data
        or not data.get("name")
        or not data.get("email")
        or not data.get("message")
    ):
        return jsonify({"error": "Missing required fields"}), 400

    # Captcha validation
    captcha_answer = data.get("captcha_answer")
    if not captcha_answer:
        return jsonify({"error": "Please complete the captcha"}), 400

    try:
        user_answer = int(captcha_answer)
        correct_answer = session.get("captcha_answer")

        if not correct_answer or user_answer != correct_answer:
            return jsonify(
                {"error": "Incorrect captcha answer. Please try again."}
            ), 400

        # Clear the captcha from session after successful validation
        session.pop("captcha_answer", None)

    except (ValueError, TypeError):
        return jsonify({"error": "Invalid captcha answer format"}), 400

    # In a real application, you would save this to a database or send an email
    print(
        f"Contact form submission from {data['name']} ({data['email']}): {data['message']}"
    )

    return jsonify(
        {"message": "Thank you for your message! I'll get back to you soon."}
    )


@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404


@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    debug = os.environ.get("FLASK_ENV") == "development"
    app.run(host="0.0.0.0", port=port, debug=debug)
