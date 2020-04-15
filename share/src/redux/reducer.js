import {GET_POST} from "./actionType"

const initialState = {
  post:""
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case GET_POST:
      return{
        ...state,
        post: [...state.post, action.payload]
      }
      default :
      return state;
  }
}

export default reducer;