import React from 'react'
import { WizardStep, Wizard } from "react-wizard-primitive";
import { useSelector } from 'react-redux';

import Aux from '../../hoc/_Aux/_Aux'
import TemplateSelector from '../../components/TemplateSelector/TemplateSelector'
import BuilderControls from '../../components/BuilderControls/BuilderControls'
import IntroStep from '../VideoBuilderSteps/Intro/IntroStep'
import PresentYourselfStep from '../VideoBuilderSteps/PresentYouself/PresentYourselfStep'
import ExperienceStep from '../VideoBuilderSteps/Experience/ExperienceStep';
import ReferenceStep from '../VideoBuilderSteps/Reference/ReferenceStep';
import WhyMeStep from '../VideoBuilderSteps/WhyMe/WhyMeStep';
import OutroStep from '../VideoBuilderSteps/Outro/OutroStep';
import CustomStep from '../VideoBuilderSteps/Custom/CustomStep';
import StepComponent from '../../hoc/StepContent/StepContent'

export default function VideoBuilder(props) {

  const steps = useSelector(state => {
    return state.videoBuilder.steps
  })

  const currentStep = useSelector(state => {
    return state.videoBuilder.currentStep
  })

  const resolveComponent = (step) => {
    let component = <div key={step.id}>Nothing to see here</div>
    if (step.id === 'templateSelector') {
      return <TemplateSelector key={step.id} id={step.id} />
    }
    if (step.id === 'intro') {
      component = <IntroStep key={step.id} id={step.id} />
    }
    if (step.id.includes('presentYourself')) {
      component = <PresentYourselfStep key={step.id} id={step.id} />
    }
    if (step.id.includes('whyMe')) {
      component = <WhyMeStep key={step.id} id={step.id} />
    }
    if (step.id.includes('reference')) {
      component = <ReferenceStep key={step.id} id={step.id} />
    }
    if (step.id.includes('experience')) {
      component = <ExperienceStep key={step.id} id={step.id} />
    }
    if (step.id.includes('outro')) {
      component = <OutroStep key={step.id} id={step.id} />
    }
    if (step.id.includes('custom')) {
      component = <CustomStep key={step.id} id={step.id} />
    }

    return <StepComponent id={step.id}>{component}</StepComponent>
  }

  const downloadHandler = () => {
    props.history.push('/download')
  }

  return (
    <Wizard initialStepIndex={steps.findIndex(s => s.id === currentStep.id)}>
      <Aux>
        {steps.map(step => (
          <WizardStep key={step.id}>
            {({ isActive, index }) => {
              return isActive && resolveComponent(step)
            }}
          </WizardStep>
        ))}
        <BuilderControls downloadClicked={downloadHandler} />
      </Aux>
    </Wizard>
  )
}