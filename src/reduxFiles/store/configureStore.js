import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tasksReducers from './../reducers/tasksReducer'

const configureStore = () =>{

    const store = createStore(combineReducers({
        tasks: tasksReducers
    }), applyMiddleware(thunk))

    return store
}

export default configureStore