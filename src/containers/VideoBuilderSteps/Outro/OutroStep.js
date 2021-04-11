import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import classes from './OutroStep.module.scss'
import * as actions from '../../../store/actions/index'
import Aux from '../../../hoc/_Aux/_Aux'
import EditableInput from '../../../components/EditableInput/EditableInput'
import VideoContainer from '../../../components/VideoContainer/VideoContainer'

const OutroStep = (props) => {
  const dispatch = useDispatch()

  const data = useSelector(state => {
    return state.stepData[props.id] || {}
  })

  const currentScene = useSelector(state => {
    return state.template.selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id))
  })

  const selectedTemplate = useSelector(state => {
    return state.template.selectedTemplate
  })

  const onInitStep = useCallback(
    () => dispatch(actions.updateCurrentStep({ id: props.id, complete: true })),
    [dispatch]
  )

  useEffect(() => {
    onInitStep()
  }, [onInitStep])

  const changeHandler = (value, key) => {
    dispatch(actions.addStepData({ id: props.id, value, key }))
  }

  const videoUploadHandler = (file) => {
    dispatch(actions.addStepData({ id: props.id, value: file, key: 'file' }))
  }

  let content = <div className={classes.Wrapper}></div>

  if (selectedTemplate.id === 4) {
    content =
      <div className={classes.Wrapper}>
        <img src={selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id)).url} />
        <VideoContainer size={currentScene.videoContainer.size} position={currentScene.videoContainer.position} videoUpload={videoUploadHandler} initialFile={data.file} />
        <div className={classes.TitleWrapper}>
          <label className={classes.StepTitle}>
            <EditableInput
              placeholder={data.sceneTitle || 'Thank you for watching my CV-VIDEO'}
              changed={(value) => changeHandler(value, 'sceneTitle')}
              inputType="Title" />
          </label>
        </div>
        <div className={classes.TextBox}>
          <div className={classes.TextBoxInner}>
            <EditableInput
              placeholder={data.freeText || 'I look forward contributing to your corporation'}
              changed={(value) => changeHandler(value, 'freeText')}
              inputType="FreeText" />
          </div>
        </div>
      </div>
  }
  else if (selectedTemplate.id === 9) {
    content =
      <div className={classes.Wrapper}>
        <img src={selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id)).url} />
        <VideoContainer size={currentScene.videoContainer.size} position={currentScene.videoContainer.position} videoUpload={videoUploadHandler} initialFile={data.file} />
        <div className={classes.TextBox9}>
          <div className={classes.TextBoxInner9}>
            <EditableInput
              placeholder={data.freeText || 'I look forward contributing to your corporation'}
              changed={(value) => changeHandler(value, 'freeText')}
              inputType="FreeText" />
          </div>
        </div>
      </div>
  }

  return (
    <Aux>
      {content}
    </Aux>
  )
}

export default OutroStep