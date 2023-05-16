from flask_sqlalchemy import SQLAlchemy
import enum
db = SQLAlchemy()

class Rol(enum.Enum):
    user="user"
    trainer="trainer"
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rol = db.Column(db.Enum(Rol), unique=False, nullable=False)
    firstname = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    id_number = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    gender = db.Column(db.String(20), unique=False, nullable=False)
    year = db.Column(db.Integer, unique=False, nullable=False)
    weight = db.Column(db.Integer, unique=False, nullable=False)
    height = db.Column(db.Integer, unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "gender": self.gender,
            "year": self.year,
            "weight": self.weight,
            "height": self.height,
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
    
#class Configue(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    edad = db.Column(db.Integer, unique=False, nullable=False)
#    peso = db.Column(db.Integer, unique=False, nullable=False)
#    estatura = db.Column(db.Integer, unique=False, nullable=False)
#    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
#
#    def __repr__(self):
#        return f'<Configue {self.id}>'
#
#    def serialize(self):
#        return {
#            "edad": self.edad,
#            "peso": self.peso,
#            "estatura": self.estatura
#            # do not serialize the password, its a security breach
#        }
    
    
#     class Trainer(db.Model):
#         id_tr = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
#         email = db.Column(db.String(120), unique=True, nullable=False)
#         trainer_id = db.Column(db.String(120), unique=True, nullable=False)
#         trainer_name = db.Column(db.String(120), unique=False, nullable=False)
#         trainer_lastname = db.Column(db.String(120), unique=False, nullable=False)
#         password = db.Column(db.String(80), unique=False, nullable=False)
#         direction = db.Column(db.String(80), unique=False, nullable=False)
#         gender = db.Column(db.String(80), unique=False, nullable=False)

#         def __repr__(self):
#             return '<Trainer %r>' % self.trainer_name

#         def serialize_trainer(self):
#             return {
#                 "id_tr": self.id_tr,
#                 "email": self.email,
#                 "trainer_id" : self.trainer_id,
#                 "trainer_name" : self.trainer_name,
#                 "trainer_lastname" : self.trainer_lastname,
#                 "direction" : self.direction,
#                 "gender" : self.gender
#                 # do not serialize the password, its a security breach
#             }

# class Online_Workout(db.Model):
#     id_ow = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
#     online_workout_name = db.Column(db.String(120), unique=False, nullable=False)
#     category = db.Column(db.String(120), unique=False, nullable=False)
#     info_detail = db.Column(db.String(9000), unique=False, nullable=False)
#     imagen = db.Column(db.String(120), unique=False, nullable=False)

#     def __repr__(self):
#         return '<Online_Workout %r>' % self.workout_name

#     def serialize_online_workout(self):
#         return {
#             "id_ow": self.id_ow,
#             "online_workout_name": self.online_workout_name,
#             "category" : self.category,
#             "info_detail" : self.info_detail,
#             "imagen" : self.imagen
#             # do not serialize the password, its a security breach
#         }
