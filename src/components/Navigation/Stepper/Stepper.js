import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from "react-router-dom"

import classes from './Stepper.module.scss'

const Stepper = () => {
  const location = useLocation()

  const steps = useSelector(state => {
    return state.videoBuilder.steps
  })

  const currentStep = useSelector(state => {
    return state.videoBuilder.currentStep
  })

  let stepTitle
  let labels = []

  if (location.pathname === '/download') {
    stepTitle = "Final"

    labels.push(<label key="download" className={[classes.Label, classes.Checked].join(' ')}></label>)
  }
  else {
    stepTitle = steps.find(s => s.id === currentStep.id).title

    for (let i = 0; i < steps.length; i++) {
      let classesToAply = [classes.Label]

      if (currentStep.id === steps[i].id) {
        classesToAply.push(classes.Checked)
      }
      labels.push(<label key={i} className={classesToAply.join(' ')}></label>)
    }
  }

  let splitTitle = stepTitle.split(' ')

  let stepperText
  if (splitTitle.length === 1) {
    stepperText = <p><strong>{splitTitle[0].toUpperCase()}</strong></p>
  }
  else {
    stepperText = <p>{splitTitle[0].toUpperCase()} <strong>{splitTitle[splitTitle.length - 1].toUpperCase()}</strong></p>
  }

  return (
    <div className={classes.Stepper}>
      {stepperText}
      {labels}
    </div>
  )
}

export default Stepper