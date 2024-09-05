import React, { useRef }from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'' : 'hide'}`} ref={player}
    onClick={closePlayer}>
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" allow="autoplay" />
    </div>
  )
}

export default VideoPlayer