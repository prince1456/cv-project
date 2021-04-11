import * as actionTypes from './actionTypes'

export const setTemplate = (template) => {
  return {
    type: actionTypes.SET_TEMPLATE,
    payload: template
  };
};