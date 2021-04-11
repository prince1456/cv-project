import React, { useEffect } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'

import classes from './VideoContainer.module.scss'
import useVideoInput from '../../hooks/video-input-handler'
import Aux from '../../hoc/_Aux/_Aux'

const VideoContainer = (props) => {
  const {
    hiddenFileInput,
    videoRef,
    videoPlaying,
    handleVideoInput,
    videoHandler,
    handleClick,
    videoLoaded,
    videoFile
  } = useVideoInput(props.initialFile)

  useEffect(() => {
    if(props.videoUpload) props.videoUpload(videoFile)
  }, [videoFile])

  const containerHandler = (event) => {
    event.stopPropagation()
    if (!videoLoaded) {
      handleClick()
    }
    else {
      videoHandler()
    }
  }

  const uploadHandler = (event) => {
    event.stopPropagation()
    handleClick()
  }

  return (
    <Aux>
      <div
        onClick={containerHandler}
        className={classes.Container}
        style={{ width: props.size, height: props.size, ...props.position }}>
        <div className={classes.Inner} style={videoLoaded ? { display: 'none' } : {}}>
          <div className={classes.DropZone}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <div className={classes.DropZoneDesc}>
                <AiOutlineCloudUpload size="7em" />
              </div>
            </div>
          </div>
        </div>
        <video playsInline ref={videoRef}>
        </video>
        <div onClick={videoHandler} className={classes.VideoOverlay} style={!videoLoaded || videoPlaying ? { display: 'none' } : {}}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div className={classes.Buttons}>
              <FaPlay size="7em" color="white" />
              <AiOutlineCloudUpload size="8em" onClick={uploadHandler} color="white" style={{ marginLeft: '75px' }} />
            </div>
          </div>
        </div>
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={event => handleVideoInput(event)}
        style={{ display: 'none' }}
      />
    </Aux>
  )
}

export default VideoContainer