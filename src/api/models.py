from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    id_number = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    gender = db.Column(db.String(20), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Valores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    calorias_ingeridas = db.Column(db.Integer, unique=False, nullable=False)
    calorias_gastadas = db.Column(db.Integer, unique=False, nullable=False)
    horas_ejercicio = db.Column(db.Integer, unique=False, nullable=False)
    horas_sueño = db.Column(db.Integer, unique=False, nullable=False)
    scoop_proteina = db.Column(db.Integer, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    
class Configue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    edad = db.Column(db.Integer, unique=False, nullable=False)
    peso = db.Column(db.Integer, unique=False, nullable=False)
    estatura = db.Column(db.Integer, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    def __repr__(self):
        return f'<Configue {self.id}>'

    def serialize(self):
        return {
            "edad": self.edad,
            "peso": self.peso,
            "estatura": self.estatura
            # do not serialize the password, its a security breach
        }
    