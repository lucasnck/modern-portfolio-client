import React from "react"

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleModal } from './FullBannerActions'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const FullBanner = (props) => {

    return (
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


            <div className={ `ecommerce-analyse ${props.modal.status}`}>
                <div className="container">
                    <button className="btn btn-ecommerce-analyse" onClick={props.toggleModal}>
                        E-commerce Scan
                    <small>Gratuíto</small>
                    </button>

                    <div id="ecommerce-analyse-modal" className="modal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button class="close" onClick={props.toggleModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>
                                        Obtenha a análise do seu e-commerce, feita por um especialista!
                                        <br /> 
                                        E o melhor, <b>totalmente gratuíta</b>
                                    </p>
                                    <p>
                                        É muito simples e rápido, você me envia a URL da sua loja,<br/>
                                        e eu te devolvo um feedback com possíveis oportunidades para aumentar sua conversão, ajustes, melhorias no layout, análise de concorrentes e mais! Veja a lista completa:
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

function mapStateToProps(state) {
    return {
        modal: state.fullbanner.modal
    }
}

function mapDispatchToProps(dispath) {
    return bindActionCreators({ toggleModal }, dispath)
}

export default connect(mapStateToProps, mapDispatchToProps)(FullBanner)