import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faList, faThList, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";

export default () => {
    const settings = {
        centerMode: true,
        infinite: true,
        slidesToShow: 7,
        speed: 800
    };
    return (
        <section id="skills" className="text-center p-5">
            <div className="skills-container">
                <div className="container">
                    <h2>Habilidades e Conhecimentos</h2>
                    <div className="filters-container d-flex justify-content-center position-relative">
                        <a className="btn btn-link">
                            Front-end <FontAwesomeIcon icon={faChevronDown} />
                        </a>

                        <a className="btn btn-link">
                            Back-end <FontAwesomeIcon icon={faChevronDown} />
                        </a>

                        <a className="btn btn-link">
                            Full-end <FontAwesomeIcon icon={faChevronDown} />
                        </a>

                        <div className="position-absolute list-type-filters">
                            <a className="btn btn-link">
                                <FontAwesomeIcon icon={faEllipsisH} />
                            </a>
                            <a className="btn btn-link">
                                <FontAwesomeIcon icon={faThList} />
                            </a>
                        </div>
                    </div>
                    <ul>
                        <Slider {...settings}>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">JavaScript</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Java</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Node</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">GraphQL</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">React</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Angular</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">TypeScript</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">jQuery</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">HTML5</h5>
                                        <p className="card-text">Avançado</p>
                                    </div>
                                </div>
                            </li>
                        </Slider>
                    </ul>
                </div>
            </div>
        </section >
    )
} 