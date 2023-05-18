"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, ValoresDiario, ValoresMensual
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
    print(request.json)
    rol = request.json.get("rol", None)
    email = request.json.get("email", None)
    firstname = request.json.get("firstname", None)
    lastname = request.json.get("lastname", None)
    password = request.json.get("password", None)
    id_number = request.json.get("id_number", None)
    gender = request.json.get("gender", None)
    address = request.json.get("address", None)
    year = request.json.get("year", None)
    weight = request.json.get("weight", None)
    height = request.json.get("height", None)  

    if rol is None or email is None or firstname is None or lastname is None or  password is None or id_number is None or gender is None or address is None or year is None or weight is None or height is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            user=User(rol=rol, email=email, firstname=firstname, lastname=lastname, password=password, id_number=id_number, gender=gender, address=address, year=year, weight=weight, height=height)
            db.session.add(user)
            db.session.commit()
            return jsonify({"msg": "User created"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400

@api.route('/user', methods=['GET'])
@jwt_required()
def search_user():
    get_user = User.query.get(get_jwt_identity())
    return jsonify(get_user.serialize())

@api.route('/user', methods=['PUT'])
@jwt_required()
def actualizar_usuario():
    get_user = User.query.get(get_jwt_identity())
    get_user.weight = request.json.get("weight", get_user.weight)
    get_user.height = request.json.get("height", get_user.height)

    if get_user.weight is None or get_user.height is None:
        return jsonify({"msg": "No enough data"}), 400
    else:
        try:
            db.session.commit()
            return jsonify({"msg": "User updated"}), 200

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

@api.route('/trainer', methods=['GET', 'POST'])
def trainer_pva():
    if request.method == 'GET':
        gt_get_trainer = Trainer.query.all()
        all_trainers = list(map(lambda x: x.serialize_trainer(), gt_get_trainers))
        return jsonify(all_trainers), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        for i in request_body: 
            insert_trainers = Trainers(
                            email=i["email"],
                            trainer_id=i["trainer_id"],
                            trainer_name=i["trainer_name"],
                            trainer_lastname=i["trainer_lastname"],
                            imagen=i["imagen"],
                            gender=i["gender"])
            db.session.add(insert_trainers)
            db.session.commit()
        return jsonify({"Awesome" : request_body }), 200

@api.route('/trainers/<int:id_tr>', methods=['GET'])
def trainers_pva_ind(id_tr):
    gt_get_trainers_pva_ind =  Trainers.query.filter_by(id_tr = id_tr).first()
    if gt_get_trainer_pva_ind is None:
        raise APIException('This trainer does not exist', status_code=404)
    trainer_pva = gt_get_trainer_pva_ind.serialize_trainer()
    return jsonify(trainer_pva), 200



@api.route('/online_workout', methods=['GET', 'POST'])
def online_workout_pva():
    if request.method == 'GET':
        gt_get_online_workout = Online_workout.query.all()
        all_online_workout = list(map(lambda x: x.serialize_online_workout(), gt_get_online_workout))
        return jsonify(all_online_workout), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        for i in request_body: 
            insert_online_workout = Online_Workout(
                            Online_workout_name=i["online_workout_name"],
                            category=i["category"],
                            info_detail=i["info_detail"],
                            imagen=i["imagen"])
            db.session.add(insert_online_workout)
            db.session.commit()
        return jsonify({"Awesome" : request_body }), 200

@api.route('/online_workout/<int:id_ow>', methods=['GET'])
def online_workout_pva_ind(id_ow):
    gt_get_online_workout_pva_ind =  Online_workout.query.filter_by(id_ow = id_ow).first()
    if gt_get_online_workout_pva_ind is None:
        raise APIException('This online workout does not exist', status_code=401)
    online_workout_pva = gt_get_online_workout_pva_ind.serialize_online_workout()
    return jsonify(online_workout_pva), 200

@api.route('/dia', methods=['POST'])
@jwt_required()
def registrar_dia():
    calorias_ingeridas = request.json.get("calorias_ingeridas", None)
    calorias_gastadas = request.json.get("calorias_gastadas", None)
    horas_ejercicio = request.json.get("horas_ejercicio", None)
    horas_sueño = request.json.get("horas_sueño", None)
    scoop_proteina = request.json.get("scoop_proteina", None)
    ptos_mes = request.json.get("ptos_mes", None)
    hsue_mes = request.json.get("hsue_mes", None)

    if calorias_ingeridas is None or calorias_gastadas is None or horas_ejercicio is None or  horas_sueño is None or scoop_proteina is None or ptos_mes is None or hsue_mes is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            dia=ValoresDiario(calorias_ingeridas=calorias_ingeridas, calorias_gastadas=calorias_gastadas, horas_ejercicio=horas_ejercicio, horas_sueño=horas_sueño, scoop_proteina=scoop_proteina, ptos_mes=ptos_mes, hsue_mes=hsue_mes)
            db.session.add(dia)
            db.session.commit()
            return jsonify({"msg": "Dia Registrado"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400

@api.route('/dia', methods=['GET'])
@jwt_required()
def search_dia():
    get_user = User.query.get(get_jwt_identity())
    return jsonify(get_user.serialize())

@api.route('/dia', methods=['PUT'])
@jwt_required()
def actualizar_dia():
    get_user = User.query.get(get_jwt_identity())
    get_user.calorias_ingeridas = request.json.get("calorias_ingeridas", get_user.calorias_ingeridas)
    get_user.horas_ejercicio = request.json.get("horas_ejercicio", get_user.horas_ejercicio)
    get_user.horas_sueño = request.json.get("horas_ejercicio", get_user.horas_sueño)
    get_user.scoop_proteina = request.json.get("scoop_proteina", get_user.scoop_proteina)
    get_user.ptos_mes = request.json.get("ptos_mes", get_user.ptos_mes)
    get_user.hsue_mes = request.json.get("hsue_mes", get_user.hsue_mes)

    if get_user.calorias_ingeridas is None or get_user.calorias_gastadas is None or get_user.horas_ejercicio is None or  get_user.horas_sueño is None or get_user.scoop_proteina is None or get_user.ptos_mes is None or get_user.hsue_mes is None: 
        return jsonify({"msg": "No enough data"}), 400
    else:
        try:
            db.session.commit()
            return jsonify({"msg": "Dia Actualizado"}), 200

        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400

@api.route('/mes', methods=['POST'])
@jwt_required()
def registrar_mes():
    ptos_mes = request.json.get("ptos_mes", None)
    hsue_mes = request.json.get("hsue_mes", None)

    if ptos_mes is None or hsue_mes is None: 
        return jsonify({"msg": "No enough data"}), 400

    else:
        try: 
            mes=ValoresMensual(ptos_mes=ptos_mes, hsue_mes=hsue_mes)
            db.session.add(mes)
            db.session.commit()
            return jsonify({"msg": "Mes Registrado"}), 200
            
        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400

@api.route('/mes', methods=['GET'])
@jwt_required()
def search_mes():
    get_user = User.query.get(get_jwt_identity())
    return jsonify(get_user.serialize())

@api.route('/mes', methods=['PUT'])
@jwt_required()
def actualizar_mes():
    get_user = User.query.get(get_jwt_identity())
    get_user.ptos_mes = request.json.get("ptos_mes", get_user.ptos_mes)
    get_user.hsue_mes = request.json.get("hsue_mes", get_user.hsue_mes)

    if get_user.ptos_mes is None or get_user.hsue_mes is None: 
        return jsonify({"msg": "No enough data"}), 400
    else:
        try:
            db.session.commit()
            return jsonify({"msg": "Mes Actualizado"}), 200

        except Exception as error:
            return jsonify({"msg": f"{error.args[0]}"}), 400