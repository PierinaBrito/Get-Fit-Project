import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import "../../styles/pages/perfil.css";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend);


export const Perfil = () => {
    const { store, actions } = useContext(Context);
    
    const dataDona = {
        labels: ['Puntos de Hoy' ],
        datasets: [
          {
            label: '# of Votes',
            data: [89, 11],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 255, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 0, 0.2)'
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const optionsPuntos = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: "Gráfico a 30 dias de tus puntos.",
          },
        },
      };
      
      const labels = ["30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14","13","12","11","10","9","8","7","6","5","4","3","2","1","0"];
      const dataPuntosA = ["30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14","13","12","11","10","9","8","7","6","5","4","3","2","1","0"];
    
      const dataPuntos = {
        labels,
        datasets: [
          {
            label: 'Tus Puntos',
            data: dataPuntosA.map((i) => Number(dataPuntosA[i])),
            borderColor: 'rgba(255, 159, 64)',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
          },
          {
            label: 'Promedio',
            data: dataPuntosA.map(() => 1),
            borderColor: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        ],
      };

      const optionsSueno = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Gráfico a 30 dias de tu sueño.',
          },
        },
      };      

      const dataSuenoA = ["30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14","13","12","11","10","9","8","7","6","5","4","3","2","1","0"];

      const dataSueno = {
        labels,
        datasets: [
          {
            label: 'Tus Horas',
            data: dataSuenoA.map((i) => Number(dataSuenoA[i])),
            borderColor: 'rgb(26, 82, 118)',
            backgroundColor: 'rgba(26, 82, 118, 0.5)',
          },
          {
            label: 'Promedio',
            data: dataSuenoA.map(() => 1),
            borderColor: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        ],
      };

  return (
    <section>
        <div className="container py-5">

            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" id="Avatar" />
                            <h5 className="my-3">Juan Pablo Parra</h5>
                            <p className="text-muted mb-1">18 años</p>
                            <p className="text-muted mb-4">Masculino <i class="fa-solid fa-mars"></i></p>
                            <div className="d-flex justify-content-center mb-2">
                                <Link to="/dia">
                                  <button type="button" className="btn btn-primary">Registrar mi Dia</button>
                                </Link>
                                <Link to="/configuracion">
                                  <button type="button" to="/configuracion" className="btn btn-outline-primary ms-1"><i class="fa-solid fa-gear"></i></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush rounded-3">
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <p className="m-0"><i class="fa-solid fa-weight-scale"></i> Peso Actual</p>
                                    <p className="mb-0">55 Kg</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <p className="m-0"><i class="fa-solid fa-ruler-vertical"></i> Estatura Actual</p>
                                    <p className="mb-0">1.72 m</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <p className="m-0"><i class="fa-solid fa-egg"></i> Promedio Calorias Ingeridas</p>
                                    <p className="mb-0">485 cal</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <p className="m-0"><i class="fa-solid fa-fire"></i> Promedio Calorias Gastadas</p>
                                    <p className="mb-0">563 cal</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <p className="m-0"><i class="fa-solid fa-star"></i> Promedio Puntos</p>
                                    <p className="mb-0">83 ptos</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-4 mb-lg-0">
                        <div className="card-body text-center">
                            <Doughnut data={dataDona} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <Line options={optionsPuntos} data={dataPuntos} />
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">   
                            <Line options={optionsSueno} data={dataSueno} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
