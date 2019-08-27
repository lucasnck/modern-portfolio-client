import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/#about">Sobre</Link>
            <Link to="/#skills">Skills</Link>
            <Link to="/#projects">Projetos</Link>
            <Link to="/#careers">Carreira</Link>
            <Link to="/#language">Formação Acadêmica</Link>
            <Link to="/#articles">Artigos</Link>
            <Link to="/#contact">Contato</Link>
            <Link to="/#language">APIs</Link>
        </nav>
    )
}

export default Menu