from flask import Flask, render_template, redirect, url_for, request, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import smtplib

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.secret_key = 'shopping_db' 
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        users = User.query.all()
        print(users)

        for user in users:
            print(user.username,user.email,user.password_hash)

        user = User.query.filter_by(username=username).first()
        print(user)
        if user is not None and user.check_password(password):
            return redirect(url_for('index'))
        else:
            print('Invalid username or password')
            return render_template('Account.html')

    return render_template('Account.html')

@app.route('/index')
def index():
    return render_template('Index.html')

@app.route('/cart')
def cart():
    return render_template('Cart.html')

@app.route('/contactus')
def contactus():
    return render_template('Contact Us.html')

@app.route('/item')
def item():
    return render_template('Item.html')

@app.route('/products')
def products():
    return render_template('Products.html')

@app.route('/aboutus')
def aboutus():
    return render_template('About Us.html')

@app.route('/send_mail')
def send_mail():
    return render_template('Send Mail.php')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        # user1= User(username='Aditya', email='Aditya@gmail.com')
        # user1.set_password('Aditya1234')
        # db.session.add(user1)
        # db.session.commit()
        # print("User created successfully!")
    app.run(debug=True)