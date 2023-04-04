from flask import flash

app1 = flash(__name__)

@app1.route('/')
def App():
    return "Hello from flask"

if __name__ ==  '__main__' :
    app.run(debug=True)