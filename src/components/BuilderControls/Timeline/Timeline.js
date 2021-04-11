import React, { useContext, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { WizardContext } from 'react-wizard-primitive'
import { IoChevronBack } from 'react-icons/io5';
import { RiVideoDownloadFill } from "react-icons/ri";

import Clip from './Clip/Clip'
import classes from './Timeline.module.scss'
import * as actions from '../../../store/actions/index';
import Aux from '../../../hoc/_Aux/_Aux'
import Modal from '../../UI/Modal/Modal'
import SceneSelector from '../../SceneSelector/SceneSelector'
import Button from '../../UI/Button/Button';

const Timeline = (props) => {
  const { moveToStep, previousStep, activeStepIndex } = useContext(WizardContext)
  const lastClipRef = useRef(null)
  const dispatch = useDispatch()
  const clipRefs = useRef([])
  clipRefs.current = []

  const steps = useSelector(state => {
    return state.videoBuilder.steps
  })

  const currentStep = useSelector(state => {
    return state.videoBuilder.currentStep
  })

  const showSceneSelector = useSelector(state => {
    return state.videoBuilder.showSceneSelector
  })

  useEffect(() => {
    lastClipRef.current.scrollIntoView({ "inline": "start", "behavior": "smooth" })
  }, [showSceneSelector])

  const clipClickedHandler = (event, stepId) => {
    const stepIndex = steps.findIndex(s => s.id === stepId)
    moveToStep(stepIndex)
    const clipRef = clipRefs.current.find(c => c === event.target)
    clipRef.scrollIntoView({ "inline": "center", "behavior": "smooth" })
  }

  const deleteStepHandler = (event, step) => {
    event.stopPropagation();
    clipRefs.current = clipRefs.current.filter(c => c === event.target)
    dispatch(actions.deleteStep(step))
    previousStep()
  }

  const newClipHandler = () => {
    dispatch(actions.toggleSceneSelector())
  }

  const addToRefs = (clip) => {
    if (clip && !clipRefs.current.includes(clip)) {
      clipRefs.current.push(clip)
    }
  }

  const modalClosedHandler = () => {
    dispatch(actions.toggleSceneSelector())
  }

  const sceneSelectedHandler = (scene) => {
    dispatch(actions.addStep(scene))
    moveToStep(steps.length)
    dispatch(actions.toggleSceneSelector())
  }

  const filteredSteps = steps.filter(step => step.id !== 'templateSelector')

  return (
    <Aux>
      <div className={classes.Navigation}>
        <div className={classes.Button}>
          {activeStepIndex !== 0 ?
            <Button
              customStyle={{ fontSize: '22px', width: '65px', justifyContent: 'center' }}
              clicked={() => moveToStep(0)}
              btnType="Primary">
              <IoChevronBack />
            </Button>
            : null
          }
        </div>
        <div className={classes.Wrapper}>
          <div className={classes.Timeline}>
            <div className={classes.ClipWrapper}>
              {filteredSteps.map((step, index, array) => {

                let clip =
                  <Clip
                    key={step.id}
                    id={step.id}
                    title={step.title.toUpperCase()}
                    active={currentStep.id === step.id}
                    clicked={(event) => clipClickedHandler(event, step.id)}
                    delete={(event) => deleteStepHandler(event, step)}
                    ref={addToRefs}
                  />

                const elements = [clip]

                if (index < array.length - 1) {
                  elements.push(<span key={step.title} className={classes.Dashed} style={{ width: '2%', margin: '10px' }}></span>)
                }

                return elements
              })}

              <span className={classes.Dashed} style={{ width: '2%', margin: '10px' }}></span>
              <Clip
                key="newClip"
                id="newClip"
                clicked={newClipHandler}
                ref={lastClipRef}
              />
            </div>
          </div>
        </div>
        <div className={classes.Button}>
          <Button 
            //disabled={currentStep.id === 'introStep' && !currentStep.complete} 
            clicked={props.downloadClicked}
            btnType="Primary" 
            customStyle={{ fontSize: '22px', width: '65px', justifyContent: 'center' }}>
            <RiVideoDownloadFill />
          </Button>
        </div>
      </div>
      {showSceneSelector ?
        <Modal
          show={showSceneSelector}
          active={true}
          modalClosed={modalClosedHandler}
          header="Choose your next scene"
          continued={sceneSelectedHandler}
        >
          <SceneSelector close={modalClosedHandler} />
        </Modal>
        : null
      }
    </Aux>
  )
}

export default Timeline