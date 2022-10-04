import '../../assets/css/fonts.css';
import './videoplayer.css';
import cross from './../../assets/img/icons/cross.svg';

import React from 'react';

class VideoPlayer extends React.Component {

    render() {
        return (
                <div className="video">
                    <img src={cross} className="img-close-modal-icon-internal" alt="Lukk" onClick={this.props.closeModalHandler} />
                    <iframe src={this.props.videoUrl} title={this.props.videoTitle} width="100%" height="auto" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
        );
    }
}

export default VideoPlayer;