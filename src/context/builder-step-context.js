import React, { useState } from 'react';

const EMPTY_STEP = { id: -1, complete: false }
const SELECT_SCENE_STEP = {
  id: 3,
  title: 'CHOOSE YOUR NEXT SCENE',
  complete: false
}

export const BuilderStepContext = React.createContext({
  currentBuilderStep: { id: 1, complete: false },
  nextBuilderStep: { id: 2, complete: false },
  previousBuilderStep: { ...EMPTY_STEP },
  allBuilderSteps: [],
  next: () => { },
  previous: () => { },
  goTo: (stepId) => { },
  setCurrentBuilderStepComplete: () => { }
});

export default props => {
  const [currentBuilderStep, setCurrentBuilderStep] = useState({ id: 1, complete: false })
  const [nextBuilderStep, setNextBuilderStep] = useState({ id: 2, complete: false })
  const [previousBuilderStep, setPreviousBuilderStep] = useState({ ...EMPTY_STEP })
  const [allBuilderSteps, setAllBuilderSteps] = useState(
    [
      {
        id: 1,
        title: 'CHOOSE TEMPLATE',
        complete: false
      }
    ])

  const goToNextStep = () => {
    const newCurrentStep = { ...nextBuilderStep }
    const newPreviousStep = { ...currentBuilderStep }

    let newNextStep

    if (currentBuilderStep.id === 1) {
      newNextStep = { ...SELECT_SCENE_STEP }
    }
    else if(currentBuilderStep.id === SELECT_SCENE_STEP.id) {
      // newNextStep = 
    }

    setCurrentBuilderStep(newCurrentStep)
    setPreviousBuilderStep(newPreviousStep)
    setNextBuilderStep(newNextStep)
  }

  const goToPreviousStep = () => {
    const newCurrentStep = { ...previousBuilderStep }
    const newNextStep = { ...currentBuilderStep }
    const newPreviousStep = { ...EMPTY_STEP }

    setCurrentBuilderStep(newCurrentStep)
    setPreviousBuilderStep(newPreviousStep)
    setNextBuilderStep(newNextStep)
  }

  const goToStep = (stepId) => {

  }

  const completeCurrentBuilderStep = (complete) => {
    let step = { ...currentBuilderStep, complete: complete }
    setCurrentBuilderStep(step)
    updateBuilderSteps(step.id)
  }

  const updateBuilderSteps = (stepId, complete) => {
    let builderSteps = [...allBuilderSteps]
    let stepIndex = builderSteps.findIndex(s => s.id === stepId)
    let step = {
      ...builderSteps[stepIndex],
      complete: complete
    }

    builderSteps[stepIndex] = step

    setAllBuilderSteps(builderSteps)
  }

  return (
    <BuilderStepContext.Provider
      value={
        {
          currentBuilderStep: currentBuilderStep,
          nextBuilderStep: nextBuilderStep,
          previousBuilderStep: previousBuilderStep,
          allBuilderSteps: allBuilderSteps,
          next: goToNextStep,
          previous: goToPreviousStep,
          goTo: goToStep,
          setCurrentBuilderStepComplete: completeCurrentBuilderStep
        }
      }
    >
      {props.children}
    </BuilderStepContext.Provider>
  );
};
