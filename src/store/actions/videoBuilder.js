import * as actionTypes from './actionTypes'

export const updateCurrentStep = (step) => {
  return {
    type: actionTypes.UPDATE_CURRENT_STEP,
    payload: step
  }
}

export const addStep = (scene) => {
  return {
    type: actionTypes.ADD_STEP,
    payload: scene
  }
}

export const deleteStep = (step) => {
  return {
    type: actionTypes.DELETE_STEP,
    payload: step
  }
}

export const toggleSceneSelector = () => {
  return {
    type: actionTypes.SHOW_SCENE_SELECTOR
  }
}

export const addStepData = (data) => {
  return {
    type: actionTypes.SET_STEP_DATA,
    payload: data
  };
};