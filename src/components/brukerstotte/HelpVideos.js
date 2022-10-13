import '../../assets/css/fonts.css'
import './helpvideos.css'
import React from 'react'
import VideoThumb from './VideoThumb.js'

class HelpVideos extends React.Component {
    constructor() {
        super()

        this.compareCategory = this.compareCategory.bind(this)
    }

    compareCategory(a, b) {
        if (a.category.toLowerCase() === b.category.toLowerCase()) {
            return a.order < b.order ? -1 : 1
        } else {
            return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1
        }
    }

    render() {
        const videosSorted = this.props.videoList.sort(this.compareCategory)
        const videos = videosSorted.map((video, i) => {
            return (
                <div className="video-thumb-container" key={i}>
                    <VideoThumb
                        show={
                            video.urlFriendlyName === this.props.showVideoTitle
                        }
                        id={video.id}
                        videoHeaderImageUrl={video.videoHeaderImageUrl}
                        videoTitle={video.videoTitle}
                        videoUrl={video.videoUrl}
                        videoDurationText={video.videoDurationText}
                        modalTitle={video.modalTitle}
                        modalContent={video.modalContent}
                        urlFriendlyName={video.urlFriendlyName}
                    />
                </div>
            )
        })
        return (
            <div className="helpvideos">
                {videos.length > 0 ? (
                    videos
                ) : (
                    <div className="no-items">Ingen videoer tilgjengelig</div>
                )}
            </div>
        )
    }
}

export default HelpVideos
