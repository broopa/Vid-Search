import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const renderList = videos.map((video) => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />
    })
    return(
        <div className="ui segment">
            <div className="ui relaxed divided list">
                {renderList}
            </div>
        </div>
    );
};

export default VideoList;