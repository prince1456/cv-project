import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateObject, checkValidity } from '../shared/utility'
import * as actions from '../store/actions/index'

export default function useInput(stepId, form) {
  const [formIsValid, setFormIsValid] = useState(false)

  const dispatch = useDispatch()

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(form[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        form[inputIdentifier].validation
      ),
      touched: true
    })
    const updatedForm = updateObject(form, {
      [inputIdentifier]: updatedFormElement
    })

    if(stepId.includes('intro')) {
      dispatch(actions.setIntroForm(updatedForm))
    }
    else if(stepId.includes('experience')) {
      dispatch(actions.setForm(updatedForm))
    }
    checkFormIsValid(updatedForm)
  }

  const checkFormIsValid = (form) => {
    let formIsValid = true
    for (let inputIdentifier in form) {
      formIsValid = form[inputIdentifier].valid && formIsValid
    }

    setFormIsValid(formIsValid)
    dispatch(actions.updateCurrentStep({ id: stepId, complete: formIsValid }))
  }

  return [
    formIsValid,
    inputChangedHandler
  ]
}