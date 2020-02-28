import { GET_DATA } from "./Action"

const initialstate = {
    data:""
}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case GET_DATA :
            return{
                ...state,
                data: action.data
            }
        default :
            return state
    }
}

export default reducer