import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/pages/signup.css";

export const Configuracion = () => {
  const { store, actions } = useContext(Context);
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [estatura, setEstatura] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await actions.signup({
      edad: edad,
      peso: peso,
      estatura: estatura
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
            <h3>Edita tus datos</h3>
            <div className="d-flex flex-wrap">
              <div className="form-group col-md-12">
                {/* Form Data */}
                <label htmlFor="edad">Edad</label>
                <input
                  onChange={(e) => setEdad(e.target.value)}
                  type="number"
                  className="form-control"
                  id="edad"
                  placeholder="20 años"
                />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="peso">Peso</label>
                <input
                  onChange={(e) => setPeso(e.target.value)}
                  type="number"
                  className="form-control"
                  id="peso"
                  placeholder="60 kg"
                />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="estatura">Estatura</label>
                <input
                  onChange={(e) => setEstatura(e.target.value)}
                  type="number"
                  className="form-control"
                  id="estatura"
                  placeholder="179 cm"
                />
              </div>

              <div className="col-md-12 text-center mt-3">
                <button type="submit" className="btn btn-primary btn-block">
                    Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
