import React, { Component } from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

class Page extends Component {

    render() {
        
        return (
            <React.Fragment>
                <Header />
                {this.props.location.search}
                <Content content={this.props.content} />
                <Footer />
            </React.Fragment>
        )
    }

}

export default Page