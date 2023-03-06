import React, { useEffect, useState, lazy, Suspense } from "react";
import YouTube from 'react-youtube';

/**
 * 
 */
const YoutubePlr = ({link, children}) => {
  console.log(link, children);
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
        <YouTube videoId={link} opts={opts} />
      )}
		</>
  );
}

// #endregion

export default YoutubePlr;