import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './FieldActions'

class App extends Component {

    render() {
        return (
            <div>
                <label>{this.props.value}</label>
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispath) {
    return bindActionCreators({ changeValue }, dispath)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)