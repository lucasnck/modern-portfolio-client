import React from 'react'

import Menu from './Menu'
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-space">
                    <div className="right-menu logo">
                        <img src={logo} alt="Lucasnck Portfólio" />
                        <span className="name">lucasnck</span>
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
                        <div class="extra-links">
                            <Link className="btn btn-send-job btn-purple" to="/">Manda Freela</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header