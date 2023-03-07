import React, { useEffect, useState, lazy, Suspense } from "react";
import YouTube from 'react-youtube';
import Modal from 'react-modal';
const el = document.querySelector('body');
Modal.setAppElement(el)
/**
 * YoutubePlr
 */

const YoutubePlr = ({link, children}) => {
  const [showVideo, setShowVideo] = useState(false)
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const updateState = (e) => {
    e.preventDefault()
    setShowVideo(prevState => !prevState)
  }

  return (
    <>
			<a href={link} className="ml-3 text-blue-700 hover:underline hover:text-green-700" onClick={updateState}>{children}</a>
      {showVideo && (
        <Modal
        isOpen={showVideo}
        
        // onRequestClose={closeModal}
        // style={customStyles}
        className="Modal"
        overlayClassName="Overlay"
        >
          
          <button onClick={updateState}>close</button>
          <div>I am a modal</div>
          <YouTube videoId={link} opts={opts} />
          <img src="images/picsum.jpg" alt="" />
        </Modal>
      )}
		</>
  );
}

// #endregion

export default YoutubePlr;