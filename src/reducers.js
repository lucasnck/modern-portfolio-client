import { combineReducers } from 'redux'

// reducers
import CounterReducer from './components/counter/CounterReducer'
import FieldReducer from './components/field/FieldReducer'
import FullBannerReducer from './components/fullbanner/FullBannerReducer'

const reducers = combineReducers({
    field: FieldReducer,
    counter: CounterReducer,
    fullbanner: FullBannerReducer
})

export default reducers