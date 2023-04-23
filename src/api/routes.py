"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Valores, Configue
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# Create Flask app
api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.

@api.route('/user', methods=['POST'])
def create_user():
    email = request.json.get("email", None)
    firstname = request.json.get("firstname", None)
    lastname = request.json.get("lastname", None)
    password = request.json.get("password", None)
    id_number = request.json.get("id_number", None)
    gender = request.json.get("gender", None)
    address = request.json.get("address", None) 

    if email is None or firstname is None or lastname is None or  password is None or id_number is None or gender is None or address is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            user=User(email=email, firstname=firstname, lastname=lastname, password=password, id_number=id_number, gender=gender, address=address)
            db.session.add(user)
            db.session.commit()
            return jsonify({"msg": "User created"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400


@api.route('/login', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        print(user)
        # create a new token with the user id inside
        access_token = create_access_token(identity=user.id)
        return jsonify({ "token": access_token, "user_id": user.id }), 200






        

@api.route('/dia', methods=['POST'])
def registrar_dia():
    calorias_ingeridas = request.json.get("calorias_ingeridas", None)
    calorias_gastadas = request.json.get("calorias_gastadas", None)
    horas_ejercicio = request.json.get("horas_ejercicio", None)
    horas_sueño = request.json.get("horas_sueño", None)
    scoop_proteina = request.json.get("scoop_proteina", None)

    if calorias_ingeridas is None or calorias_gastadas is None or horas_ejercicio is None or  horas_sueño is None or scoop_proteina is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            dia=Valores(calorias_ingeridas=calorias_ingeridas, calorias_gastadas=calorias_gastadas, horas_ejercicio=horas_ejercicio, horas_sueño=horas_sueño, scoop_proteina=scoop_proteina)
            db.session.add(dia)
            db.session.commit()
            return jsonify({"msg": "Dia Registrado"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400

@api.route('/configuracion', methods=['POST'])
def cambiar_configuracion():
    edad = request.json.get("edad", None)
    peso = request.json.get("peso", None)
    estatura = request.json.get("estatura", None) 

    if edad is None or peso is None or estatura is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            config=Configue(edad=edad, peso=peso, estatura=estatura)
            db.session.add(config)
            db.session.commit()
            return jsonify({"msg": "Datos Actualizados"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400
