import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement, stepChanged } from './CounterActions'

const Counter = (props) => (
    <div>
        <h2>{props.counter.number}</h2>
        <input onChange={props.stepChanged} value={props.counter.step} />
        <button onClick={props.decrement}>-</button>
        <button onClick={props.increment}>+</button>
    </div>
)

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispathToProps = dispath => bindActionCreators({ increment, decrement, stepChanged }, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Counter)