import React from 'react'

import VideoListItem from './video_list_item'

class VideoList extends React.Component {
  render () {
    const { props: { videos, onVideoSelect } } = this /*要取得 props 要放在render中。定義取到父元件 app 的 props*/
    const videoItems = videos.map(video =>{
      return(
        <VideoListItem
          onVideoSelect={onVideoSelect}
          key={video.etag}
          video={video} />
      )/*
         1. onVideoSelect 為 callback prop to video_list_item
         2. 要加上 return
        */
    })
    return(
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}

export default VideoList;
