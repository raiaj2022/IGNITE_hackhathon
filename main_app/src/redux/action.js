import {
  GET_CHARACTERS,
  SET_STEP_TRUE
} from "./types";

export const getCharacters = () => async (dispatch) => {
  const responseData = await fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json());

  dispatch({
    type: GET_CHARACTERS,
    payload: responseData.results,
  });
};

export const setStepTrue = (isTickedObj) => async(dispatch) => {
  dispatch({
    type: SET_STEP_TRUE,
    payload: isTickedObj
  })
}
