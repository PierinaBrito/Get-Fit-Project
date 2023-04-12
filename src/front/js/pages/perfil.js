import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pages/perfil.css";

export const Perfil = () => {
  const { store, actions } = useContext(Context);

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
                                <button type="button" className="btn btn-primary">Registrar mi Dia</button>
                                <button type="button" className="btn btn-outline-primary ms-1"><i class="fa-solid fa-gear"></i></button>
                            </div>
                        </div>
                    </div>
                    <div clclassNameass="card mb-4 mb-lg-0">
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
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Johnatan Smith</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">example@example.com</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Phone</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">(097) 234-5678</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Mobile</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">(098) 765-4321</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Address</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Johnatan Smith</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">example@example.com</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Phone</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">(097) 234-5678</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Mobile</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">(098) 765-4321</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Address</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
