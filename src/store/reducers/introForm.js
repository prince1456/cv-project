import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  introForm: {
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your name'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    position: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your title e.g. Graphic Designer'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    // education: {
    //   elementType: 'input',
    //   elementConfig: {
    //     type: 'text',
    //     placeholder: 'Your education e.g. B.Sc. Engineering'
    //   },
    //   value: '',
    //   validation: {
    //     required: true
    //   },
    //   valid: false,
    //   touched: false
    // }
  },
  formIsValid: false
}

const setIntroData = (state, action) => {
  return updateObject(state, {introForm: action.payload})
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.SET_INTRO_DATA: return setIntroData( state, action );
      default: return state;
  }
};

export default reducer;