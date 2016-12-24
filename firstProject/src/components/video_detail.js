import React from 'react'

class VideoDetial extends React.Component {
  render () {
    const { props: { video } } = this
    if(!video){
      return <div>Loading...</div>
    }
    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`
    return(
      <div className="video-detial col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe frameborder="0" className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    )
  }
}

export default VideoDetial;
