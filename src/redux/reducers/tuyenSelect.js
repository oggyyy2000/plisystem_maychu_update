import * as types from "../types";

const initialState = "T87";
const myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.tuyenSelect:
      return action.data;
    default:
      return state;
  }
};
export default myReducers;
