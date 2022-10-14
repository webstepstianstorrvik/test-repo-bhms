import '../../assets/css/fonts.css'
import './videoplayer.css'
import cross from './../../assets/img/icons/cross.svg'

import React from 'react'

interface IVideoPlayerProps {
    videoUrl: string
    videoTitle: string
    closeModalHandler: () => void
}

const VideoPlayer = ({
    videoUrl,
    videoTitle,
    closeModalHandler,
}: IVideoPlayerProps) => {
    return (
        <div className="video">
            <img
                src={cross}
                className="img-close-modal-icon-internal"
                alt="Lukk"
                onClick={closeModalHandler}
            />
            <iframe
                src={videoUrl}
                title={videoTitle}
                width="100%"
                height="auto"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoPlayer
