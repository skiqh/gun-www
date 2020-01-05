import React, { useState, useRef } from "react"
import ReactPlayer from "react-player"
import Hyphenated from "react-hyphen"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

// export default class YoutubePreview  {
//   constructor(props) {
//     super(props)
//   }
// }

const VideoPanel = ({
  url,
  cover,
  footerText,
  icon = faPlay,
  aspect = "aspect-640-360",
  panelClass = "panel-small",
}) => {

  const player = useRef(null)
  const [pristine, setPristine] = useState(true)
  const [playing, setPlaying] = useState(true)
  const togglePlaying = () => {
    setPlaying(pristine || !playing)
    setPristine(false)
  }
  const handlePlay = () => {
    setPristine(false)
    setPlaying(true)
  }
  const handlePause = () => {
    setPlaying(false)
  }
  const handleKeyDown = (evt) => {
    const key = evt.key
    console.log(player.current)
    if(key === ' ') {
      evt.preventDefault()
      evt.stopPropagation()
      togglePlaying()
    }
  }

  return (
    <div className={`panel ${panelClass}`}>
      <div className={`tile aspect ${aspect}`}>
        <ReactPlayer
          ref={player}
          light={pristine && cover}
          playing={playing}
          controls
          url={url}
          width="100%"
          height="100%"
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>
      <div
        className="footer"
        onClick={togglePlaying}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        style={{ cursor: "pointer" }}
      >
        <div className="inner">
          <div className="footericon">
            <FontAwesomeIcon
              icon={(pristine && icon) || (!playing && icon) || faPause}
            />
          </div>
          <div className="ml-3">
            <Hyphenated>{footerText}</Hyphenated>
          </div>
        </div>
      </div>
    </div>
  )
}
/* const YoutubePreview = ({image, playerUrl, alt}) => {
  const [clicked, setClicked] = useState(false)
  
  const showIframe = () => setClicked(true)
  
  const imageElm = <img src={image} onClick={showIframe} alt={alt || ''} />
  const iframeStyle = { width: "100%", height: "100%", position: 'absolute', top: 0 }
  // const iframeElm = <iframe src={iframesrc} title="" allowFullScreen scrolling={false} frameBorder={0} style={iframeStyle} />
  const iframeElm = () => (
    <ReactPlayer
      url={playerUrl}
      playing
      width="100%"
      height="100%"
      style={iframeStyle}
    />
  )

  // return clicked ? imageElm : iframeElm
  return <div style={{position: 'relative'}}>
    {imageElm}
    {clicked && iframeElm() }
  </div>
} */
// ;<iframe
//   width="560"
//   height="315"
//   src="https://www.nbcnews.com/news/embedded-video/mmvo63742021851"
//   scrolling="no"
//   frameborder="0"
//   allowfullscreen
// ></iframe>
export default VideoPanel