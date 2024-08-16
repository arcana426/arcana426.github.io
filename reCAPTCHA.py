from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# シークレットキーを設定 (Google reCAPTCHA から取得したもの)
SECRET_KEY = 'あなたのシークレットキーをここに挿入'

@app.route('/verify-recaptcha', methods=['POST'])
def verify_recaptcha():
    token = request.json.get('token')
    if not token:
        return jsonify({'success': False, 'message': 'Token is missing'}), 400

    url = "https://www.google.com/recaptcha/api/siteverify"
    payload = {
        'secret': SECRET_KEY,
        'response': token
    }
    response = requests.post(url, data=payload)
    result = response.json()

    if result.get("success"):
        return jsonify({'success': True})
    else:
        return jsonify({'success': False, 'message': 'reCAPTCHA verification failed'})

if __name__ == '__main__':
    app.run(debug=True)
