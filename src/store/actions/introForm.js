import * as actionTypes from './actionTypes'

export const setIntroForm = (formData) => {
  return {
    type: actionTypes.SET_INTRO_DATA,
    payload: formData
  };
};