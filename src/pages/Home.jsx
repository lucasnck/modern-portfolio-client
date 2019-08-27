import React, { Component } from 'react'

// components
import App from '../components/field/App'
import Counter from '../components/counter/Counter'
import Cube from '../components/cube/Cube'

import FullBanner from '../components/fullbanner/FullBanner';
import About from '../components/about/About';
import Consulting from '../components/consulting/Consulting';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Career from '../components/career/Career';
import Academic from '../components/academic/Academic';
import Articles from '../components/articles/Articles';

class Home extends Component {

    render() {
        return (
            <>
                <FullBanner />
                <About />
                <Consulting />
                <Skills />
                <Projects />
                <Career />
                <Academic />
                <Articles />
            </>
        )
    }

}

export default Home