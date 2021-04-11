import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateObject, checkValidity } from '../../../shared/utility'
import classes from './IntroStep.module.scss'
import * as actions from '../../../store/actions/index'
import Aux from '../../../hoc/_Aux/_Aux'
import placeholderImage from '../../../assets/images/placeholderImage.png'
import EditableInput from '../../../components/EditableInput/EditableInput'
import VideoContainer from '../../../components/VideoContainer/VideoContainer'

const IntroStep = (props) => {
  const dispatch = useDispatch()

  const data = useSelector(state => {
    return state.stepData[props.id] || {}
  })

  const selectedTemplate = useSelector(state => {
    return state.template.selectedTemplate
  })

  const currentScene = useSelector(state => {
    return state.template.selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id))
  })

  const onInitStep = useCallback(
    () => {
      dispatch(actions.updateCurrentStep({ id: props.id, complete: true }))
    },
    [dispatch]
  )

  useEffect(() => {
    onInitStep()
    return () => {
      submitHandler()
    }
  }, [onInitStep])

  const submitHandler = event => {
    event?.preventDefault()

    // const data = []
    // Object.entries(introForm).forEach(entry => {
    //   const [key, value] = entry;
    //   data[key] = value.value
    // });
    // data['video'] = videoInput.value
  }

  const changeHandler = (value, key) => {
    dispatch(actions.addStepData({ id: props.id, value, key }))
  }

  const videoUploadHandler = (file) => {
    dispatch(actions.addStepData({ id: props.id, value: file, key: 'file' }))
  }

  let content = <div className={classes.Wrapper}></div>

  if (selectedTemplate.id === 4) {
    content =
      <div className={classes.Wrapper4}>
        <img src={selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id)).url}/>
        <VideoContainer size={currentScene.videoContainer.size} position={currentScene.videoContainer.position} videoUpload={videoUploadHandler} initialFile={data.file} />
        <div className={classes.TitleWrapper4}>
          <EditableInput inputType="Title4" placeholder={data.name || 'Your name here'} changed={(value) => changeHandler(value, 'name')} />
          <EditableInput inputType="SubTitle4" placeholder={data.title || 'Your title here'} changed={(value) => changeHandler(value, 'title')} />
        </div>
      </div>
  }
  else if (selectedTemplate.id === 7) {
    content =
      <div>
        <img src={selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id)).url}/>
        <VideoContainer size={currentScene.videoContainer.size} position={currentScene.videoContainer.position} videoUpload={videoUploadHandler} initialFile={data.file} />
        <div className={classes.TitleWrapper7}>
          <div className={classes.Title7}>
            <EditableInput inputType="Title7" placeholder={data.name || 'Your name here'} changed={(value) => changeHandler(value, 'name')} />
          </div>
          <div className={classes.SubTitle7}>
            <EditableInput inputType="SubTitle7" placeholder={data.title || 'Your title here'} changed={(value) => changeHandler(value, 'title')} />
          </div>
        </div>
      </div>
  }
  else if (selectedTemplate.id === 8) {
    content =
      <div>
        <img src={selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id)).url}/>
        <VideoContainer size={currentScene.videoContainer.size} position={currentScene.videoContainer.position} videoUpload={videoUploadHandler} initialFile={data.file} />
        <div className={classes.Box8}>
          <div className={classes.TitleWrapper8}>
            <div className={classes.Title8}>
              <EditableInput inputType="Title8" placeholder={data.name || 'Your name here'} changed={(value) => changeHandler(value, 'name')} />
            </div>
          </div>
          <div className={classes.SubTitle8}>
            <EditableInput inputType="SubTitle8" placeholder={data.title || 'Your title here'} changed={(value) => changeHandler(value, 'title')} />
          </div>
        </div>
      </div>
  }
  else if (selectedTemplate.id === 9) {
    content =
      <div>
        <img src={selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id)).url}/>
        <VideoContainer size={currentScene.videoContainer.size} position={currentScene.videoContainer.position} videoUpload={videoUploadHandler} initialFile={data.file} />
        <div className={classes.Box9}>
          <div className={classes.Title9}>
            <EditableInput inputType="Title9" placeholder={data.name || 'Your name here'} changed={(value) => changeHandler(value, 'name')} />
          </div>
          <div className={classes.SubTitle9}>
            <EditableInput inputType="SubTitle9" placeholder={data.title || 'Your title here'} changed={(value) => changeHandler(value, 'title')} />
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

export default IntroStep