import { GET_NAME } from "./Action"

const initialstate = {
    name:""
}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case GET_NAME :
            return{
                ...state,
                name: action.payload
            }
        default :
            return state
    }
}

export default reducer