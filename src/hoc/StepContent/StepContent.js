import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';

import classes from './StepContent.module.scss'

const StepContent = props => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [scale, setScale] = useState(window.innerWidth * 0.8 / 1920)
  const [dimensions, setDimensions] = useState({ width: 192, height: 108 })

  const stepContentRef = useRef(null)

  const selectedTemplate = useSelector(state => {
    return state.template.selectedTemplate
  })

  const calculateDimensions = () => {
    // let stepComponentWidth = stepContentRef.current.offsetWidth * 0.98
    // let stepComponentHeight = stepContentRef.current.offsetHeight * 0.98
    let stepComponentWidth = window.innerWidth * 0.7
    let stepComponentHeight = window.innerHeight * 0.7

    let currentRatio = stepComponentWidth / stepComponentHeight
    let hdRatio = 1920 / 1080

    if (currentRatio > hdRatio) {
      stepComponentWidth = stepComponentHeight * hdRatio
    } else {
      stepComponentHeight = stepComponentWidth / hdRatio
    }

    if (stepComponentWidth < 192)
      stepComponentWidth = 192
    if (stepComponentHeight < 108)
      stepComponentHeight = 108

    if (stepComponentWidth > 1920)
      stepComponentWidth = 1920
    if (stepComponentHeight > 1080)
      stepComponentHeight = 1080

    setDimensions({ width: stepComponentWidth, height: stepComponentHeight })
    setScale(stepComponentWidth / 1920)
  }

  useEffect(() => {
    calculateDimensions()
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
      calculateDimensions()
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div className={classes.Content} ref={stepContentRef} id="stepContent">
      <div className={classes.ContentInner}>
        <div style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}>
          <div style={{ backgroundColor: 'white', transformOrigin: '0 0', position: 'relative', width: '1920px', height: '1080px', transform: `scale(${scale})` }}>
            {/* <div style={{ position: 'relative', width: '1920px', height: '1080px' }}> */}
            <div className={classes.Step}>
              
              {/* <svg width="1920px" height="1080px" viewBox="0 0 1920 1080" style={{ position: 'absolute' }}>
                <title>Slice</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <rect id="Rectangle" stroke="#979797" fill="#FFFFFF" x="0.5" y="0.5" width="1919" height="1079"></rect>
                  <rect id="Rectangle" stroke="#979797" fill="#333330" x="0.5" y="0.5" width="1919" height="262"></rect>
                  <rect id="Rectangle" stroke="#979797" fill="#D1DDD0" x="0.5" y="263.5" width="1919" height="816"></rect>
                </g>
              </svg> */}
              <div className={classes.StepWrapper}>
                {props.children}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{position: 'absolute', bottom: 0, left: 0, overflow: 'hidden'}}>
        <div style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px`, margin: '0px'}}></div>
      </div>
      <div style={{width: `${dimensions.width}px`, height: `${dimensions.height}px`, position: 'absolute', bottom: 0, left: 0}}>
        <div></div>
      </div> */}
    </div>
  )
}

export default StepContent