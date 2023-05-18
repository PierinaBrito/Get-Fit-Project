import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/pages/signup.css";

export const Configuracion = () => {
  const { store, actions } = useContext(Context);
  const [user_weight, setUser_weight] = useState("");
  const [user_height, setUser_height] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await actions.actualizarUsuario({
      weight: user_weight,
      height: user_height
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
                <label htmlFor="peso">Peso</label>
                <input
                  onChange={(e) => setUser_weight(e.target.value)}
                  type="number"
                  className="form-control"
                  id="peso"
                  placeholder="60 kg"
                />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="estatura">Estatura</label>
                <input
                  onChange={(e) => setUser_height(e.target.value)}
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
