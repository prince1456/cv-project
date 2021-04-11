import React, { forwardRef } from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';

import classes from './Clip.module.scss'

const Clip = forwardRef((props, ref) => {

  let classesToApply = [classes.Clip]
  if (!props.active) {
    classesToApply.push(classes.Inactive)
  }
  if(props.id === 'newClip') {
    classesToApply.push(classes.New)
  }

  return (
    <div ref={ref} className={classesToApply.join(' ')} onClick={props.clicked}>
      {props.title}
      {
        props.id !== 'newClip' && props.id !== 'intro' && props.active ? 
        <span onClick={props.delete} className={classes.DeleteIcon} style={!props.active ? {color: 'white'} : {}}>
          <AiFillMinusCircle />
        </span>
        : null
      }
    </div>
  )
})

export default Clip
