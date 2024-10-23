from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/add_project', methods=['POST'])
def add_project():
    project_title = request.form['title']
    project_description = request.form['description']
    # Save project details to a database or file
    return 'Project added!'

if __name__ == '__main__':
    app.run(debug=True)
