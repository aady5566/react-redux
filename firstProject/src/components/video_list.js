import React from 'react'

import VideoListItem from './video_list_item'

class VideoList extends React.Component {
  render () {
    const { props: { videos } } = this /*要取得 props 要放在render中。定義取到父元件 app 的 props*/
    const videoItems = videos.map(video =>{
      return <VideoListItem key={video.etag} video={video} /> /*要加上 return*/
    })
    return(
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}

export default VideoList;
