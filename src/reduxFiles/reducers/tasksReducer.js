import { C } from './../actions/tasksAction'


const tasksInitialState = {
    loading: true,
    data: [],
    errors: {}
}

const tasksReducers = (state = tasksInitialState, action) =>{
    switch(action.type){

        case C.GET_:{
            return { ...state, data: [...action.payload]}
        }

        case C.TOGGLE_LOADING: {
            return { ...state, loading: !state.loading }
        }

        case C.ADD_: {
            return { ...state, data: [...state.data, { ...action.payload} ]}
        }

        case C.EDIT_: {
            return { ...state, data: state.data.map((ele) =>{
                if( ele.id === action.payload.id ){
                    return { ...action.payload }
                } else {
                    return { ...ele}
                }
            }) }
        }

        case C.REMOVE_: {
            return { ...state, data: state.data.filter((ele) =>{
                return ele.id !== action.payload
            })}
        }

        default: { 
            return { ...state }
        }
    }

}

export default tasksReducers