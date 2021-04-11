import React, { useRef, useState, useEffect } from 'react'

import classes from './TemplateItem.module.scss'
import placeholderImage from '../../../assets/images/placeholderImage.png'
import Spinner from '../../UI/Spinner/Spinner'

const TemplateItem = (props) => {
  const videoRef = useRef(null)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const mouseEnterHandler = () => {
    if (props.videoSrc === '') {
      return
    }

    try {
      videoRef.current.play()
      setVideoPlaying(true)
    }
    catch (err) { }

    // if(!videoPlaying && videoLoaded) {
    //   videoRef.current.play()
    //   setVideoPlaying(true)
    // }
    // else if (!videoPlaying && !isLoading) {
    //   setLoading(true)
    //   videoRef.current.load();
    //   fetchVideoAndPlay();
    // }
    // else if(videoPlaying) {
    //   videoRef.current.pause()
    //   setVideoPlaying(!videoPlaying)
    //   // videoRef.current.currentTime = 0
    // }
  }

  const fetchVideoAndPlay = () => {
    fetch(props.videoSrc)
      .then(response => response.blob())
      .then(blob => {
        videoRef.current.src = URL.createObjectURL(blob);
        setVideoPlaying(true)
        setVideoLoaded(true)
        setLoading(false)
        return videoRef.current.play();
      })
      .then(_ => {
        // Video playback started
      })
      .catch(e => {
        // Video playback failed
        console.log(e)
      })
  }

  const mouseLeaveHandler = () => {
    if (props.videoSrc === '') {
      return
    }

    try {
      if (videoLoaded) {
        videoRef.current.pause()
        videoRef.current.load()
      }
      setVideoPlaying(false)
      setVideoLoaded(false)
    }
    catch (err) { }
  }

  const onLoadedData = () => {
    setVideoLoaded(true)
  }

  let classesToApply = [classes.TemplateItem]

  if (props.selected) {
    classesToApply.push(classes.Selected)
  }

  return (
    <div className={classesToApply.join(' ')}>
      {isLoading ? <Spinner /> : null}
      {/* <img
        src={props.thumbnail}
        className={[classes.VideoThumb, classes.Tiny].join(' ')}
        alt="thumb"
        style={{ opacity: videoLoaded ? 0 : 1 }}
      /> */}
      <video
        controlsList="nodownload"
        loop
        preload="metadata"
        muted
        playsInline
        ref={videoRef}
        id={props.id}
        poster={props.thumbnail === '' ? placeholderImage : props.thumbnail}
        controls={videoPlaying}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onLoadedData={onLoadedData}
        // style={{ opacity: videoLoaded ? 1 : 0 }}
        onClick={props.selectClicked}>
        <source src={props.videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}

export default TemplateItem