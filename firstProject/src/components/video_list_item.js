import React from 'react'

class VideoListItem extends React.Component {
  render () {
    const { props: { video } } = this
    const imageUrl = video.snippet.thumbnails.default.url
    return(
      <li className="list-group-item">
        <div className="video_list media">
          <div className="media-left">
            <img alt="" className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    )
  }
}

export default VideoListItem;
