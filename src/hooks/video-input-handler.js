import { useState, useRef, useEffect } from 'react'
import { updateObject, checkValidity } from '../shared/utility'

export default function useVideoInput(initialFile) {
  const [videoInput, setVideoInput] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'file',
      placeholder: '',
      style: { display: 'none' }
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  })
  
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoFile, setVideoFile] = useState(initialFile)

  const hiddenFileInput = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    if(initialFile) {
      setVideoLoaded(true)
      videoRef.current.src = URL.createObjectURL(initialFile)
    }
  }, [])

  const handleVideoInput = (event) => {
    const updatedVideoInput = updateObject(videoInput, {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        videoInput.validation
      ),
      touched: true
    })
    setVideoInput(updatedVideoInput)

    const file = event.target.files[0]
    if(file) {
      setVideoLoaded(true)
      videoRef.current.src = URL.createObjectURL(file)
      setVideoFile(file)
    }
  }

  const videoHandler = (event) => {
    if(!videoPlaying) {
      videoRef.current.play()
      setVideoPlaying(!videoPlaying)
    }
    else if(videoPlaying) {
      videoRef.current.pause()
      setVideoPlaying(!videoPlaying)
      // videoRef.current.currentTime = 0
    }
  }

  const handleClick = event => {
    hiddenFileInput.current.click()
  }

  return {
    hiddenFileInput,
    videoRef,
    videoPlaying,
    handleVideoInput,
    videoHandler,
    handleClick,
    videoLoaded,
    videoFile
  }
}