import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  totalSteps: 1,
  steps: [
    {
      id: 'templateSelector',
      title: 'Choose template'
    }
  ],
  currentStep: {
    id: 'templateSelector',
    complete: false
  },
  showSceneSelector: false
}

const updateCurrentStep = (state, action) => {
  return updateObject(state, { currentStep: action.payload })
}

const addStep = (state, action) => {
  if (state.steps.length === 1) {
    return updateObject(state, {
      steps: state.steps.concat({ id: 'intro', complete: false, title: 'INTRO' }),
      totalSteps: state.totalSteps + 1
    })
  }

  return updateObject(state, {
    steps: state.steps.concat({ id: `${action.payload.id}_${uuidv4()}`, complete: false, title: action.payload.title }),
    totalSteps: state.totalSteps + 1
  })
}

const deleteStep = (state, action) => {
  const stepToDelete = action.payload
  const stepIndex = state.steps.findIndex(s => s.id === stepToDelete.id)
  const updatedSteps = state.steps.filter(s => s.id !== stepToDelete.id)

  return updateObject(state, { steps: updatedSteps, currentStep: updatedSteps[stepIndex - 1] })
}

const toggleSceneSelector = (state, action) => {
  return updateObject(state, { showSceneSelector: !state.showSceneSelector })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_STEP: return updateCurrentStep(state, action);
    case actionTypes.ADD_STEP: return addStep(state, action);
    case actionTypes.DELETE_STEP: return deleteStep(state, action);
    case actionTypes.SHOW_SCENE_SELECTOR: return toggleSceneSelector(state, action);
    default: return state;
  }
};

export default reducer;