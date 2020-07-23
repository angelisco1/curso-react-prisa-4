import React, { useRef } from 'react'

const AudioPlayer = () => {
  const audioRef = useRef(null)

  const handlePlay = () => {
    audioRef.current.play()
  }

  const handlePause = () => {
    audioRef.current.pause()
  }

  return (
    <div>
      <audio src="./assets/audio.mp3" ref={audioRef} controls></audio>
      <button type="button" onClick={handlePlay}>Play</button>
      <button type="button" onClick={handlePause}>Pause</button>
    </div>
  )
}

export default AudioPlayer