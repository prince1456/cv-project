import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import classes from './TemplateSelector.module.scss'
import TemplateItem from './TemplateItem/TemplateItem'
import * as actions from '../../store/actions/index'

export default function TemplateSelector(props) {
  const dispatch = useDispatch()

  const selectedTemplate = useSelector(state => {
    return state.template.selectedTemplate
  })

  const templates = useSelector(state => {
    return state.template.templates
  })

  const onInitStep = useCallback(
    () => dispatch(actions.updateCurrentStep({ id: props.id, complete: !!selectedTemplate })),
    [dispatch, selectedTemplate]
  )

  useEffect(() => {
    onInitStep()
  }, [onInitStep])

  const selectedHandler = template => {
    if (template.id !== selectedTemplate?.id) {
      dispatch(actions.setTemplate(template))
      dispatch(actions.updateCurrentStep({ id: props.id, complete: true }))
    }
  }

  return (
    <div className={classes.Wrapper}>
      <div className={classes.TemplateSelector}>
        {templates.map(t => {
          return <TemplateItem
            key={t.id}
            title={t.title}
            id={t.id}
            videoSrc={t.videoSrc}
            thumbnail={t.thumbnail}
            selected={t.id === selectedTemplate?.id}
            selectClicked={() => selectedHandler(t)}
          />
        })}
      </div>
    </div>
  )
}
