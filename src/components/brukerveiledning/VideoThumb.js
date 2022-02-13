import '../../assets/css/fonts.css';
import './videothumb.css';
import React from 'react';
import ReactModal from 'react-modal';
import VideoPlayer from './VideoPlayer';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class VideoThumb extends React.Component {
    constructor() {

        super();
        ReactModal.setAppElement('#root');

        this.state = {
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }


    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }


    render() {
        return (
            <div className="video-thumb-parent">
                <div className="card video-thumb" onClick={this.handleOpenModal}>
                    <div className="header-image-container">
                        <img className="header-image" src={this.props.videoHeaderImageUrl} alt={this.props.videoTitle}/>
                    </div>
                    <div className="info">
                        <div className="title">
                            { this.props.videoTitle }
                        </div>
                        <div className="duration">
                            <FontAwesomeIcon icon={faClock} /> { this.props.videoDurationText }
                        </div>
                    </div>
                </div>

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel={this.props.videoTitle}
                    onRequestClose={this.handleCloseModal}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)'
                        },
                        content: {
                            backgroundColor: 'transparent',
                            padding: '0',
                            border: '0',
                            position: 'fixed',
                            top: '50%',
                            bottom: '50%',
                            inset: '3rem'
                        }
                    }}
                >
                    <VideoPlayer videoUrl={this.props.videoUrl} closeModalHandler={this.handleCloseModal}/>
                </ReactModal>
            </div>
        );
    }
}

export default VideoThumb;