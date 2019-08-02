import React, { Component } from 'react'

// components
import App from '../components/field/App'
import Counter from '../components/counter/Counter'
import Cube from '../components/cube/Cube'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

class Home extends Component {

    render() {
        return (
            <div>

                <section id="full-banner" className="full-banner">

                    <div className="me-message">
                        <div className="container">
                            <div className="message">
                                <div className="professional-image">
                                    <img src="https://lucasnck.github.io/resources/img/photo.jpg" />
                                </div>
                                <h2>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s <span className="text-line"></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="fullbanner-social social">
                        <div className="container">
                            <ul>
                                <li>
                                    <a href="https://github.com/lucasnck">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/lucasnck/">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/lucasnck/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/luscanck">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="full-banner-image"></div>

                </section>

                <section id="about">
                    <div className="about-image"></div>
                    <div className="container">
                        <h2>Sobre mim</h2>
                        <p>Tenho 26 anos, sou formado como Analista e Desenvolvedor de Sistemas, atualmente moro em São Paulo</p>
                    </div>
                </section>


            </div>
        )
    }

}

export default Home