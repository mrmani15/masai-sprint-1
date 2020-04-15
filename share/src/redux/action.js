import { GET_POST } from "./actionType";

export const getPost = payload => {
  return {
    type: GET_POST,
    payload
  }
}