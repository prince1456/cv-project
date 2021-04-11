import * as actionTypes from './actionTypes'

export const addStepData = (data) => {
  return {
    type: actionTypes.SET_STEP_DATA,
    payload: data
  };
};