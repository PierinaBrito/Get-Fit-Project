import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import "../../styles/pages/perfil.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);
import Calculos from "../component/calculos.js";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  //actions.read_variable_user();
  let edad = 2023 - store.user.year
  //console.log(store.user.firstname);
  const dataDona = {
    labels: ["Puntos de Hoy"],
    datasets: [
      {
        label: "# of Votes",
        data: [store.calculos.puntos, store.calculos.puntosNegativos],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 255, 255, 0.2)",
        ],
        borderColor: ["rgba(255, 159, 64, 1)", "rgba(0, 0, 0, 0.2)"],
        borderWidth: 1,
      },
    ],
  };

  const optionsPuntos = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráfico a 30 dias de tus puntos.",
      },
    },
  };

  const labels = [
    "30",
    "29",
    "28",
    "27",
    "26",
    "25",
    "24",
    "23",
    "22",
    "21",
    "20",
    "19",
    "18",
    "17",
    "16",
    "15",
    "14",
    "13",
    "12",
    "11",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
  ];
  //const dataPuntosA = store.valoresMensuales.ptos_mes;
  const dataPuntosB = ["30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14","13","12","11","10","9","8","7","6","5","4","3","2","1","0"];

  const dataPuntos = {
    labels,
    datasets: [
      {
        label: "Tus Puntos",
        data: dataPuntosB.map((i) => Number(dataPuntosB[i])),
        borderColor: "rgba(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
      },
      {
        label: "Promedio",
        data: dataPuntosB.map(() => 1),
        borderColor: "rgba(0, 0, 0, 0.5)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      },
    ],
  };

  const optionsSueno = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráfico a 30 dias de tu sueño.",
      },
    },
  };

  //const dataSuenoA = store.valoresMensuales.hsue_mes;
  const dataSuenoB = ["30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14","13","12","11","10","9","8","7","6","5","4","3","2","1","0"];

  const dataSueno = {
    labels,
    datasets: [
      {
        label: "Tus Horas",
        data: dataSuenoB.map((i) => Number(dataSuenoB[i])),
        borderColor: "rgb(26, 82, 118)",
        backgroundColor: "rgba(26, 82, 118, 0.5)",
      },
      {
        label: "Promedio",
        data: dataSuenoB.map(() => 1),
        borderColor: "rgba(0, 0, 0, 0.5)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      },
    ],
  };
  useEffect(() => {
    if (store.token === null) {
      navigate("/login");
    }
  }, [store.token]);
  useEffect(() => {
    actions.read_variable_user();
  },[]);
  useEffect(() => {
    actions.postValoresDiarios({
      user_id: store.user.id,
      calorias_ingeridas: 0,
      calorias_gastadas: 0,
      horas_ejercicio: 0,
      horas_sueño: 0,
      scoop_proteina: 0,
    });
    actions.readValoresDiarios();
  },[store.valoresDiarios]);
  useEffect(() => {
    actions.postValoresMensuales({
      user_id: store.user.id,
      ptos_mes: "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
      hsue_mes: "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]"
    });
    actions.readValoresMensuales(store.user.id);
  },[store.valoresMensuales]);
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  id="Avatar"
                />
                <h5 className="my-3">
                  {store.user.firstname} {store.user.lastname}
                </h5>
                <p className="text-muted mb-1">{edad} años</p>
                <p className="text-muted mb-4">{store.user.gender}</p>
                <div className="d-flex justify-content-center mb-2">
                  <Link to="/dia">
                    <button type="button" className="btn btn-primary">
                      Registrar mi Dia
                    </button>
                  </Link>
                  <Link to="/configuracion">
                    <button
                      type="button"
                      to="/configuracion"
                      className="btn btn-outline-primary ms-1"
                    >
                      <i className="fa-solid fa-gear"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <p className="m-0">
                      <i className="fa-solid fa-weight-scale"></i> Peso Actual
                    </p>
                    <p className="mb-0">{store.user.weight} Kg</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <p className="m-0">
                      <i className="fa-solid fa-ruler-vertical"></i> Estatura
                      Actual
                    </p>
                    <p className="mb-0">{store.user.height} m</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <p className="m-0">
                      <i className="fa-solid fa-egg"></i> Calorias Ingeridas
                    </p>
                    <p className="mb-0">{store.valoresDiarios.calorias_ingeridas} cal</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <p className="m-0">
                      <i className="fa-solid fa-fire"></i> Calorias Gastadas
                    </p>
                    <p className="mb-0">{store.valoresDiarios.calorias_gastadas} cal</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <p className="m-0">
                      <i className="fa-solid fa-star"></i> Promedio Puntos
                    </p>
                    <p className="mb-0">{store.calculos.puntos} ptos</p>
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
