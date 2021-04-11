import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai'

import classes from './ExperienceStep.module.scss'
import * as actions from '../../../store/actions/index'
import useInput from '../../../hooks/input-handler'
import Aux from '../../../hoc/_Aux/_Aux'
import EditableInput from '../../../components/EditableInput/EditableInput'
import VideoContainer from '../../../components/VideoContainer/VideoContainer'

const ExperienceStep = (props) => {
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

  const changeHandler = (idx, value, key) => {
    const elementToUpdate = { ...data.experiences[idx] }
    elementToUpdate[key] = value

    const updatedExperiences = [...data.experiences]
    updatedExperiences[idx] = elementToUpdate

    dispatch(
      actions.addStepData(
        { id: props.id, value: updatedExperiences, key: 'experiences' }
      )
    )
  }

  const addMoreHandler = () => {
    const updatedExperiences = data.experiences ? [...data.experiences] : []
    updatedExperiences.push({ id: updatedExperiences.length, companyName: '', position: '', period: '' })

    dispatch(
      actions.addStepData(
        { id: props.id, value: updatedExperiences, key: 'experiences' }
      )
    )
  }

  const deleteHandler = (idx) => {
    let updatedExperiences = [...data.experiences]
    updatedExperiences.splice(idx, 1)

    dispatch(
      actions.addStepData(
        { id: props.id, value: updatedExperiences, key: 'experiences' }
      )
    )
  }

  const videoUploadHandler = (file) => {
    dispatch(actions.addStepData({ id: props.id, value: file, key: 'file' }))
  }

  const getEditableInputs = (exp, idx) => {
    let divClass = classes.ExperienceInput
    let primaryTitle = 'InlinePrimaryTitle'
    let secondaryTitle = 'InlineSecondaryTitle'
    let tertiaryTitle = 'InlineTertiaryTitle'
    let deleteIconClass = classes.DeleteIcon

    if (selectedTemplate.id === 9) {
      divClass = classes.ExperienceInput9
      primaryTitle = 'InlinePrimaryTitle9'
      secondaryTitle = 'InlineSecondaryTitle9'
      tertiaryTitle = 'InlineTertiaryTitle9'
      deleteIconClass = classes.DeleteIcon9
    }

    return <div style={{ position: 'relative' }}>
      <div className={divClass}>
        <EditableInput
          placeholder={exp.companyName || 'Company name'} changed={(value) => changeHandler(idx, value, 'companyName')}
          inputType={primaryTitle} />
        <EditableInput
          placeholder={exp.position || 'Your position'} changed={(value) => changeHandler(idx, value, 'position')}
          inputType={secondaryTitle} />
        <EditableInput
          placeholder={exp.period || 'Period eg. 2010 - 2014'} changed={(value) => changeHandler(idx, value, 'period')}
          inputType={tertiaryTitle} />
      </div>
      <AiFillDelete
        className={deleteIconClass}
        onClick={() => deleteHandler(idx)} />
      {selectedTemplate.id === 9 && idx !== 3 ?
        <div className={classes.BorderBottom9}></div>
        : null}
    </div>
  }

  let experiences = []

  if (data.experiences) {
    experiences = data.experiences.map((exp, idx) => {
      return (
        <Aux key={idx}>
          {getEditableInputs(exp, idx)}
        </Aux>
      )
    })
  }

  let content = <div className={classes.Wrapper}></div>

  if (selectedTemplate.id === 4) {
    content =
      <div className={classes.Wrapper}>
        <img src={selectedTemplate.sceneBackgrounds.find(s => props.id.includes(s.id)).url} />
        <VideoContainer size={currentScene.videoContainer.size} position={currentScene.videoContainer.position} videoUpload={videoUploadHandler} initialFile={data.file} />
        <div className={classes.TitleWrapper}>
          <label className={classes.StepTitle}>
            Experience
        </label>
        </div>
        <div className={classes.TextBox}>
          <div className={classes.TextBoxInner}>
            {experiences}
          </div>
          <button
            disabled={data.experiences && data.experiences.length === 4}
            style={{ width: '40%', textAlign: 'center' }}
            onClick={addMoreHandler}>Add experience</button>
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
            <div className={classes.ExperienceBox9}>
              {experiences}
            </div>
          </div>
          <button
            disabled={data.experiences && data.experiences.length === 4}
            style={{ width: '40%', textAlign: 'center', bottom: '5%', position: 'absolute', fontSize: '22px' }}
            onClick={addMoreHandler}>Add experience</button>
        </div>
      </div>
  }

  return (
    <Aux>
      {content}
    </Aux>
  )
}

export default ExperienceStep