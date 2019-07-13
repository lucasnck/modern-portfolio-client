import React, { Component } from 'react'

// components
import App from '../components/field/App'
import Counter from '../components/counter/Counter'


class Home extends Component {

    render() {
        return (
            <div>

                <div className="full-banner">
                </div>
                <App value="teste" />
                <Counter />
            </div>
        )
    }

}

export default Home