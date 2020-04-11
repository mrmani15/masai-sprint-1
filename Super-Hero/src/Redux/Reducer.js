import { ALL_DATA } from './Action';
 
const initialState = {
    data:{}
}

export const Reducer = (state = initialState, Action) =>{
    switch(Action.type){
        case ALL_DATA:
            return{
                ...state,
                data:[Action.data]
            }
        default:
            return state
    }
}