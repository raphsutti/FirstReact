import React from 'react';

const VideoDetail = ({video}) => {
  // Show before fully render
  if (!video) {
    return <div>Loading...</div>
  }

  // create url with video id
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  // component
  return (
    <div className="video-detail col-md-8">
      <div className="embed-rsponsive embed-responsive-16by8">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;