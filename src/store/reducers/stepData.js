import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  // stepId: {
  //   key: 'value',
  // }
}

const addStepData = (state, action) => {
  const { id, value, key } = action.payload
  let stepData = { ...state[id] } || {}

  stepData[key] = value

  return updateObject(state, {[id]: stepData})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STEP_DATA: return addStepData(state, action);
    default: return state;
  }
};

export default reducer;