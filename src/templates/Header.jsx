import React from 'react'

import Menu from './Menu'
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-space">
                    <div className="right-menu logo-menu">
                        <a href="#">
                            <div className="logo">
                                <img src={logo} />
                            </div>
                            <h1>lucasnck</h1>
                        </a>
                    </div>
                    <div className="left-menu links">
                        <Menu />
                        <div className="language">
                            <span className="selected">pt-BR</span>
                            <div className="options">
                                <Link to="/?language=pt-BR">pt-BR</Link>
                                <Link to="/?language=eng">eng</Link>
                            </div>
                        </div>
                        <div className="extra-links">
                            <Link className="btn btn-send-job btn-purple" to="/">Consultoria <FontAwesomeIcon icon={faChevronDown} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header