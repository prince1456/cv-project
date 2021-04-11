import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  scenes: [
    { id: 'presentYourself', title: 'Present yourself' },
    { id: 'reference', title: 'Reference' },
    { id: 'experience', title: 'Experience' },
    { id: 'whyMe', title: 'Why me?' },
    { id: 'outro', title: 'Outro' },
    { id: 'custom', title: 'Custom' }
  ]
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      default: return state;
  }
};

export default reducer;