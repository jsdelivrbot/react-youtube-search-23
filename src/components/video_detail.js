import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading....</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8" style={{marginTop: '20px'}}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe width="420" height="315" src={ url } className="embed-responsive-item" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;