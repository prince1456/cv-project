import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import classes from './SceneSelector.module.scss'
import SceneItem from './SceneItem/SceneItem'
import Aux from '../../hoc/_Aux/_Aux';

export default function SceneSelector(props) {
  const [selected, setSelected] = useState()

  const selectedHandler = scene => {
    setSelected(scene)
    props.callback(scene)
  }

  const scenes = useSelector(state => {
    return state.scene.scenes
  })

  return (
    <Aux>
      <div className={classes.SceneSelector}>
        {scenes.map(s => {
          return <SceneItem
            key={s.id}
            title={s.title}
            id={s.id}
            selected={s.id === selected?.id}
            selectClicked={() => selectedHandler(s)}
          />
        })}
      </div>
    </Aux>
  )
}