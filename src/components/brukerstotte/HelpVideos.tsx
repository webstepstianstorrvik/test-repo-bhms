import '../../assets/css/fonts.css'
import './helpvideos.css'
import React from 'react'
import VideoThumb from './VideoThumb'
import { Video } from './VideoList'

interface IHelpVideosProps {
    videoList: Video[]
    showVideoTitle: string | null
}

const HelpVideos = ({ videoList, showVideoTitle }: IHelpVideosProps) => {
    const compareCategory = (a: Video, b: Video) => {
        if (a.category.toLowerCase() === b.category.toLowerCase()) {
            return a.videoTitle < b.videoTitle ? -1 : 1
        } else {
            return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1
        }
    }
    const videosSorted = videoList.sort(compareCategory)
    const videos = videosSorted.map((video, i) => {
        return (
            <div className="video-thumb-container" key={i}>
                <VideoThumb
                    show={video.urlFriendlyName === showVideoTitle}
                    videoHeaderImageUrl={video.videoHeaderImageUrl}
                    videoTitle={video.videoTitle}
                    videoUrl={video.videoUrl}
                    videoDurationText={video.videoDurationText}
                    modalTitle={video.modalTitle ?? ''}
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

export default HelpVideos
