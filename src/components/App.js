import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube.js';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('bmx');


    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={search} />
            <div className="ui grid">
                <div className="ui stackable grid">
                    <div className="ten wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="six wide column">
                     <VideoList onVideoSelect={(video) => setSelectedVideo(video) }  
                     videos={videos} />
                    </div>
                </div>
            </div>        
        </div>
    );
}; 

{/* CLASS COMPONENT
    class App extends React.Component {
    state= { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchSubmit('bmx');
    }

    onSearchSubmit = async searchtext => {
       const response = await youtube.get('/search', {
           params:{
               q: searchtext
           }
       });

       this.setState({ 
           videos: response.data.items,
           selectedVideo: response.data.items[0] 
        });

    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui stackable grid">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                         <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
} */}

export default App;