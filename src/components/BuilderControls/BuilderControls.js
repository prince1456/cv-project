import React, { useContext } from 'react'
import { WizardContext } from 'react-wizard-primitive'
import { useSelector, useDispatch } from 'react-redux';

import classes from './BuilderControls.module.scss'
import Button from '../UI/Button/Button'
import Timeline from './Timeline/Timeline'
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/_Aux/_Aux';
import { IoChevronForward } from 'react-icons/io5';

const BuilderControls = (props) => {
  const { nextStep, activeStepIndex } = useContext(WizardContext);
  const dispatch = useDispatch()

  const steps = useSelector(state => {
    return state.videoBuilder.steps
  })

  const currentStep = useSelector(state => {
    return state.videoBuilder.currentStep
  })

  const nextClickedHandler = () => {
    if (currentStep.id === 'templateSelector' && activeStepIndex === steps.length - 1) {
      dispatch(actions.addStep())
      nextStep()
    }
    else if (activeStepIndex < steps.length - 1) {
      nextStep()
    }
  }

  return (
    <Aux>
      <div className={classes.BuilderControls}>
        {activeStepIndex !== 0 ?
          <Timeline downloadClicked={props.downloadClicked}/>
          : null}
        <div className={classes.Buttons}>
          <div className={classes.BtnGroup}>
            {currentStep.id === 'templateSelector' ?
              <Button
                disabled={!currentStep.complete}
                clicked={nextClickedHandler}
                btnType="Primary">
                Next <span style={{ marginTop: '5px' }}><IoChevronForward /></span>
              </Button>
              : null
            }
          </div>
        </div>
      </div>
    </Aux>
  )
}

export default BuilderControls