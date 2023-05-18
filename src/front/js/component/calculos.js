import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Calculos = () => {
    const { store, actions } = useContext(Context);
    const response1 = actions.readValoresDiarios();
    if (response1 == false) {
        alert("Imposible cargar  Diarios");
    }
    const response2 = actions.readValoresMensuales();
    if (response2 == false) {
        alert("Imposible cargar datos Mensuales");
    }
    const ptos_calorias = 0;
    const ptos_peso = 0;
    const ptos_ejercicio = 0;
    const ptos_sueno = 0;
    const ptos_proteina = 0;
    const ptos_total = 0;
    const ptos_negativos = 0;
    if(store.valoresUser.calorias_ingeridas - store.valoresUser.calorias_gastadas >= 0){
        if(store.valoresUser.calorias_ingeridas - store.valoresUser.calorias_gastadas >= 1000){
            ptos_calorias = 100;
        }
        if(store.valoresUser.calorias_ingeridas - store.valoresUser.calorias_gastadas < 1000){
            ptos_calorias = ((store.valoresUser.calorias_ingeridas - store.valoresUser.calorias_gastadas) * 100)/1000;
        }
    }
    if(store.valoresUser.calorias_ingeridas - store.valoresUser.calorias_gastadas < 0){
        if(store.valoresUser.calorias_ingeridas - store.valoresUser.calorias_gastadas <= -1000){
            ptos_calorias = 100;
        }
        if(store.valoresUser.calorias_ingeridas - store.valoresUser.calorias_gastadas > -1000){
            ptos_calorias = ((store.valoresUser.calorias_ingeridas - store.valoresUser.calorias_gastadas) * -100)/1000;
        }
    }
    if((store.valoresUser.estatura - 100) - store.valoresUser.peso >= 0){
        if((store.valoresUser.estatura - 100) - store.valoresUser.peso >= 10){
            ptos_peso = 100;
        }
        if((store.valoresUser.estatura - 100) - store.valoresUser.peso < 10){
            ptos_peso = (((store.valoresUser.estatura - 100) - store.valoresUser.peso) * 100)/10;
        }
    }
    if((store.valoresUser.estatura - 100) - store.valoresUser.peso < 0){
        if((store.valoresUser.estatura - 100) - store.valoresUser.peso <= -10){
            ptos_peso = 100;
        }
        if((store.valoresUser.estatura - 100) - store.valoresUser.peso > -10){
            ptos_peso = (((store.valoresUser.estatura - 100) - store.valoresUser.peso) * -100)/10;
        }
    }
    if(store.valoresUser.horas_ejercicio >= 2){
        ptos_ejercicio = 100;
    }
    if(store.valoresUser.horas_ejercicio < 2){
        ptos_ejercicio = (store.valoresUser.horas_ejercicio * 100)/2;
    }
    if(store.valoresUser.horas_sueno >= 8){
        ptos_sueno = 100;
    }
    if(store.valoresUser.horas_sueno < 8){
        ptos_sueno = (store.valoresUser.horas_sueno * 100)/8;
    }
    if(store.valoresUser.scoop_proteina >= 4){
        ptos_proteina = 100;
    }
    if(store.valoresUser.scoop_proteina < 4){
        ptos_proteina = (store.valoresUser.horas_sueno * 100)/4;
    }
    ptos_total = ((ptos_calorias-100)+(ptos_peso-100)+(ptos_ejercicio)+(ptos_sueno)+(ptos_proteina))/5;
    ptos_negativos = 100 - ptos_total;
    var arrayPtos = JSON.parse(store.valoresMensuales.ptos_mes);
    var arrayHsue = JSON.parse(store.valoresMensuales.hsue_mes);
    arrayPtos.append(ptos_total);
    arrayHsue.append(store.valoresUser.horas_sueno);
    arrayPtos.shift();
    arrayHsue.shift();
    const response3 = actions.actualizarValoresMensuales({
        arrayPtos: String(arrayPtos),
        arrayHsue: String(arrayHsue),
      });
    if (response3 == false) {
        alert("Imposible subir datos Mensuales");
    };
};
