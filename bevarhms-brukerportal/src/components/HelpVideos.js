import './../assets/css/fonts.css';
import './helpvideos.css';
import React from 'react';
import VideoThumb from './VideoThumb.js';

class HelpVideos extends React.Component {

    render() {
        const videos = this.props.videoList.map((video, i) => {
            return (
                <div className="video-thumb-container">
                    <VideoThumb key={i}
                                videoHeaderImageUrl={video.videoHeaderImageUrl}
                                videoTitle={video.videoTitle}
                                videoUrl={video.videoUrl}
                                videoDurationText={video.videoDurationText}
                    />
                </div>
            );
        });
        return (
            <div className="helpvideos">
                { videos }
            </div>
        );
    }
}

export default HelpVideos;
