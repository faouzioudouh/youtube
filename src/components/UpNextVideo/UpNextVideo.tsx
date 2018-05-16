import * as React from 'react';
import VideoCard from '../VideoCard';

interface Props {
    nextVideo: GoogleApiYouTubeVideoResource;
}

const UpNextVideo = ({nextVideo}: Props) => {
    if (!nextVideo) {
        return null;
    }

    return (
        <div className="UpNextVideo">
            <p>Up next</p>
            <VideoCard video={nextVideo} className="VideoCard__list-item" />
        </div>
    );
};

export default UpNextVideo;