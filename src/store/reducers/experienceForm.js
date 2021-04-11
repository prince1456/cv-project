import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  initialForm: {
    company: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Company name'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    title: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Title'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    yearFrom: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Year from'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    yearTo: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Year to'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    }
  },
  form: {
    company: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Company name'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    title: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Title'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    yearFrom: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Year from'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    yearTo: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Year to'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    }
  },
  formIsValid: false
}

const setForm = (state, action) => {
  return updateObject(state, { form: action.payload })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EXPERIENCE_DATA: return setForm(state, action);
    default: return state;
  }
};

export default reducer;