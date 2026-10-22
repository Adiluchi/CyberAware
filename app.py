import re
import requests
from flask import Response
from flask import Flask, render_template, request
from analyzer import analyze_email
from hibp_checker import check_pwned_password
from flask import jsonify

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024

@app.route('/')
def home():
    return render_template('index.html', page='home')

@app.route('/learn')
def learn():
    return render_template('index.html', page='learn')

@app.route('/threats')
def threats():
    return render_template('index.html', page='threats')
    
@app.route('/quiz')
def quiz():
    return render_template('index.html', page='quiz')

@app.route('/password')
def password():
    return render_template('index.html', page='password')

@app.route('/analyzer', methods=['GET', 'POST'])
def analyzer():
    result, error = None, None
    if request.method == 'POST':
        upload = request.files.get('email_file')
        if not upload or not upload.filename.lower().endswith('.eml'):
            error = 'Please choose an .eml file.'
        else:
            try:
                result = analyze_email(upload.read())
            except Exception:
                error = 'The email could not be parsed. Please use a valid .eml file.'
    return render_template('index.html', page='analyzer', result=result, error=error)

@app.errorhandler(413)
def too_large(error):
    return render_template('index.html', page='analyzer', result=None, error='File too large (max 1 MB).'), 413

@app.route('/api/check-password', methods=['POST'])
def check_password_api():
    data = request.get_json(silent=True) or {}
    password = data.get('password')

    if not isinstance(password, str) or not password:
        return jsonify({'error': 'Please enter a password'}), 400

    try:
        count = check_pwned_password(password)

        return jsonify({
            'pwned': count > 0,
            'count': count
        })

    except requests.RequestException:
        return jsonify({
            'error': 'HIBP service is unavailable'
        }), 503

@app.route("/api/pwned-range/<prefix>", methods=["GET"])
def pwned_range(prefix):
    if not re.fullmatch(r"[A-Fa-f0-9]{5}", prefix):
        return {"error": "Invalid hash prefix"}, 400

    try:
        response = requests.get(
            "https://api.pwnedpasswords.com/range/" + prefix.upper(),
            headers={
                "Add-Padding": "true",
                "User-Agent": "CyberAware-StudentProject/1.0"
            },
            timeout=10
        )

        response.raise_for_status()

        return Response(
            response.text,
            mimetype="text/plain",
            headers={"Cache-Control": "no-store"}
        )

    except requests.RequestException:
        return {"error": "HIBP service unavailable"}, 503


if __name__ == '__main__':
    app.run(debug=True)
