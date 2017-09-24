import * as React from 'react';
import { formatNumber } from '../../libs/formatNumber';
import './VideoDetails.css';

interface Props {
    video: GoogleApiYouTubeVideoResource;
}

const VideoDetails = ({video}: Props) => {
    if (!video) {
        return null;
    }

    const { snippet, statistics } = video;
    const { title } = snippet;
    const { dislikeCount, likeCount, viewCount } = statistics;

    return (
        <div className="VideoDetails">
            <div className="VideoDetails__title">
                <h3><span>{title}</span></h3>
            </div>
            <div className="VideoDetails__metadata">
                <div className="VideoDetails__metadata-views-count">
                    <span aria-label={`${viewCount} Views`}>{formatNumber(viewCount)} Views</span>
                </div>
                <div className="VideoDetails__metadata-reactions">
                    <span>{formatNumber(likeCount)} Likes | {formatNumber(dislikeCount)} Dislikes</span>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;