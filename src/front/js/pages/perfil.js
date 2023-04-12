import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import "../../styles/pages/perfil.css";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend);


export const Perfil = () => {
    const { store, actions } = useContext(Context);
    
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
    
      const data2 = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => 1),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => 1),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
                                <i class="fa-solid fa-weight-scale"></i>
                                    <p className="mb-0">55 Kg</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fa-solid fa-ruler-vertical"></i>
                                    <p className="mb-0">1.72 m</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fa-solid fa-egg"></i>
                                    <p className="mb-0">485 cal</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fa-solid fa-fire"></i>
                                    <p className="mb-0">563 cal</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i class="fa-solid fa-star"></i>
                                    <p className="mb-0">83 ptos</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-4 mb-lg-0">
                        <div className="card-body text-center">
                            <Doughnut data={data} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <Line options={options} data={data2} />
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">   
                            <Line options={options} data={data2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
