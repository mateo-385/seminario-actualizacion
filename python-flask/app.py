from flask import Flask, send_from_directory

app = Flask(__name__,static_folder='public')

@app.route('/')
def index():
    return send_from_directory('public', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('public', filename)

 
if __name__ == '__main__':
    app.run(debug=True, host='localhost', port= 5000  )
