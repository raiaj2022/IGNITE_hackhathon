import {
  GET_CHARACTERS,
  SET_STEP_TRUE
} from "../types";

const initialState = {
  characters: [],
  isTickedObj: {
    step1: false,
    step2: false,
    step3: false,
    step4: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case SET_STEP_TRUE:
      return {
        ...state,
        isTickedObj: payload
      }
    default:
      return state;
  }
};
