import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/pages/signup.css";

export const Dia = () => {
  const { store, actions } = useContext(Context);
  const [calIng, setCalIng] = useState("");
  const [calGas, setCalGas] = useState("");
  const [hEje, setHEje] = useState("");
  const [hSue, setHSue] = useState("");
  const [scp, setScp] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await actions.dia({
      calorias_ingeridas: calIng,
      calorias_gastadas: calGas,
      horas_ejercicio: hEje,
      horas_sueño: hSue,
      scoop_proteina: scp
    });
    if (response) {
      navigate("/perfil");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 register">
          <form onSubmit={handleSubmit}>
            <h3>Registra tu Dia</h3>
            <div className="d-flex flex-wrap">
              <div className="form-group col-md-12">
                {/* Form Data */}
                <label htmlFor="caloriasIngeridas">Calorias Ingeridas</label>
                <input
                  onChange={(e) => setCalIng(e.target.value)}
                  type="number"
                  className="form-control"
                  id="caloriasIngeridas"
                  placeholder="2800 calorias"
                />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="caloriasGastadas">Calorias Gastadas</label>
                <input
                  onChange={(e) => setCalGas(e.target.value)}
                  type="number"
                  className="form-control"
                  id="caloriasGastadas"
                  placeholder="2800 calorias"
                />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="horasEjercicio">Horas de Ejercicio</label>
                <input
                  onChange={(e) => setHEje(e.target.value)}
                  type="number"
                  className="form-control"
                  id="horasEjercicio"
                  placeholder="2h"
                />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="horasSueno">Horas de sueño</label>
                <input
                  onChange={(e) => setHSue(e.target.value)}
                  type="number"
                  className="form-control"
                  id="horasSueno"
                  placeholder="8h"
                />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="scoopsProteina">Scoops de Proteina</label>
                <input
                  onChange={(e) => setScp(e.target.value)}
                  type="number"
                  className="form-control"
                  id="scoopsProteina"
                  placeholder="4 scoops"
                />
              </div>

              <div className="col-md-12 text-center mt-3">
                <button type="submit" className="btn btn-primary btn-block">
                    Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
