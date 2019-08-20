import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faMobile, faDesktop, faCogs } from "@fortawesome/free-solid-svg-icons";
import Gif from '../../assets/img/florest-pc.png'

export default () => {

    return (
        <section id="consulting" className="text-center p-5">
            <div className="consulting-container">
                <div className="container">
                    <h2>Consultoria</h2>
                    <div className="phrase">
                        <div className="icon">
                            <img src={Gif} />
                        </div>
                        <h3><span>"</span>Antes deu chegar aqui, isso tudo era <strong>mato</strong><span>"</span></h3>
                    </div>
                    <ul className="row">
                        <li className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faGlobeAmericas} />
                                    </div>
                                    <h5 className="card-title">E-commerce</h5>
                                    <p className="card-text">Desenvolvimento para e-commerce</p>
                                    <a className="btn btn-link">Saiba mais</a>
                                </div>
                            </div>
                        </li>
                        <li className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faDesktop} />
                                        {/* <span className="icon-custom svg-devlopment"></span> */}
                                    </div>
                                    <h5 className="card-title">Aplicações Web</h5>
                                    <p className="card-text">Desenvolvimento de websites</p>
                                    <a className="btn btn-link">Saiba mais</a>
                                </div>
                            </div>
                        </li>
                        <li className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faMobile} />
                                        {/* <span className="icon-custom svg-devlopment"></span> */}
                                    </div>
                                    <h5 className="card-title">Aplicativos</h5>
                                    <p className="card-text">Desenvolvimento de aplicativos</p>
                                    <a className="btn btn-link">Saiba mais</a>
                                </div>
                            </div>
                        </li>
                        <li className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faCogs} />
                                    </div>
                                    <h5 className="card-title">Configurações</h5>
                                    <p className="card-text">Configurações gerais em e-commerce</p>
                                    <a className="btn btn-link">Saiba mais</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    )
} 