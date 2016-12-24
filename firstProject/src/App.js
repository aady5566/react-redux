import React from 'react'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyANpS8A8Hl_Lw0iUf0CSDEClPzTo24I4CQ'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { videos: [] }

    YTSearch({key: API_KEY, temp: "surfboard"},(videos)=>{
      this.setState({videos})
    })  // 從 youtube api 的 callback function 得到 videos, 又 因 key ,value 同名 所以 this.setState({videos:videos})可以化簡
  }
  render () {
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/> {/*pass props 'video' from the state.videos which is derived by parent component App*/}
      </div>

    )
  }
}

export default App;
