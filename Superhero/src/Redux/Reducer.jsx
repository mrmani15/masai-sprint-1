import { GET_NAME } from "./Action"

const initialstate = {

}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case GET_NAME :
            return{

            }
        default :
            return state
    }
}

export default reducer