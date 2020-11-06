import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from'./components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyA_srp3SZ7Ab7YP_J4sYw6AawlncOJ-hvM';

class App extends Component {

  constructor(props){
    super(props)
      this.state={videos:[],selectedVideo:null}
      this.videoSearch('sports')
      
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({videos:videos,selectedVideo:videos[0]});
    })

  }


  render(){
    return (
      <div className="App">
        
        <SearchBar onSearchChange={term=>this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onSelectedVideo={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }  

}

export default App;
