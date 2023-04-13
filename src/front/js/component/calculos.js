import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Calculos = () => {
    const { store, actions } = useContext(Context);
    const ptos_calorias = 0;
    const ptos_peso = 0;
    const ptos_ejercicio = 0;
    const ptos_sueno = 0;
    const ptos_proteina = 0;
    const ptos_total = 0;
    const ptos_negativos = 0;
    if(store.calorias_ingeridas - store.calorias_gastadas >= 0){
        if(store.calorias_ingeridas - store.calorias_gastadas >= 1000){
            ptos_calorias = 100;
        }
        if(store.calorias_ingeridas - store.calorias_gastadas < 1000){
            ptos_calorias = ((store.calorias_ingeridas - store.calorias_gastadas) * 100)/1000;
        }
    }
    if(store.calorias_ingeridas - store.calorias_gastadas < 0){
        if(store.calorias_ingeridas - store.calorias_gastadas <= -1000){
            ptos_calorias = 100;
        }
        if(store.calorias_ingeridas - store.calorias_gastadas > -1000){
            ptos_calorias = ((store.calorias_ingeridas - store.calorias_gastadas) * -100)/1000;
        }
    }
    if((store.estatura - 100) - store.peso >= 0){
        if((store.estatura - 100) - store.peso >= 10){
            ptos_peso = 100;
        }
        if((store.estatura - 100) - store.peso < 10){
            ptos_peso = (((store.estatura - 100) - store.peso) * 100)/10;
        }
    }
    if((store.estatura - 100) - store.peso < 0){
        if((store.estatura - 100) - store.peso <= -10){
            ptos_peso = 100;
        }
        if((store.estatura - 100) - store.peso > -10){
            ptos_peso = (((store.estatura - 100) - store.peso) * -100)/10;
        }
    }
    if(store.horas_ejercicio >= 2){
        ptos_ejercicio = 100;
    }
    if(store.horas_ejercicio < 2){
        ptos_ejercicio = (store.horas_ejercicio * 100)/2;
    }
    if(store.horas_sueno >= 8){
        ptos_sueno = 100;
    }
    if(store.horas_sueno < 8){
        ptos_sueno = (store.horas_sueno * 100)/8;
    }
    if(store.scoop_proteina >= 4){
        ptos_proteina = 100;
    }
    if(store.scoop_proteina < 4){
        ptos_proteina = (store.horas_sueno * 100)/4;
    }
    ptos_total = ((ptos_calorias-100)+(ptos_peso-100)+(ptos_ejercicio)+(ptos_sueno)+(ptos_proteina))/5;
    ptos_negativos = 100 - ptos_total;
    return(
        "a"
    );
};
