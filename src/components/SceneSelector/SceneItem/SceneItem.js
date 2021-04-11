import React from 'react'
import { useSelector } from 'react-redux'

import grayBackground from '../../../assets/images/grayBackground.png'
import classes from './SceneItem.module.scss'

const SceneItem = (props) => {

  let classesToApply = [classes.SceneItem]

  const selectedTemplate = useSelector(state => {
    return state.template.selectedTemplate
  })

  const steps = useSelector(state => {
    return state.videoBuilder.steps
  })

  let sceneAlreadyInTimeline = false
  // if (props.id.includes('custom') || steps.find(s => s.id === props.id)) {
  //   sceneAlreadyInTimeline = true
  // }

  if (props.selected && !sceneAlreadyInTimeline) {
    classesToApply.push(classes.Selected)
  }

  return (
    <div className={classesToApply.join(' ')} onClick={!sceneAlreadyInTimeline ? props.selectClicked : null}>
      <div className={classes.ImgWrap}>
        {sceneAlreadyInTimeline ?
          <img src={grayBackground} alt=""></img>
          :
          <img alt="" src={selectedTemplate?.sceneBackgroundSmall === '' ? grayBackground : selectedTemplate?.sceneBackgroundSmall}></img>
        }
      </div>
      <p>{props.title}</p>
    </div>
  )
}

export default SceneItem