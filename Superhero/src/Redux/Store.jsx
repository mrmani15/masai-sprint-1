import { createStore } from "redux";
import reducer from "./Reducer";

const store = new createStore(reducer) 

export default store;