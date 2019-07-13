import { combineReducers } from 'redux'

// reducers
import CounterReducer from './components/counter/CounterReducer'
import FieldReducer from './components/field/FieldReducer'

const reducers = combineReducers({
    field: FieldReducer,
    counter: CounterReducer
})

export default reducers