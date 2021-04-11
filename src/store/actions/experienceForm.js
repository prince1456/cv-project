import * as actionTypes from './actionTypes'

export const setForm = (formData) => {
  return {
    type: actionTypes.SET_EXPERIENCE_DATA,
    payload: formData
  };
};