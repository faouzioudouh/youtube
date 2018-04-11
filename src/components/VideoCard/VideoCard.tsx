import * as React from 'react';
import * as classnames from 'classnames';

import { formatNumber, formatDuration } from '../../libs/formatNumber';
import './VideoCrad.css';

interface Props {
    video: GoogleApiYouTubeVideoResource;
    handleVideoClick?: () => void;
    className: string;
}

const VideoCard = ({video, handleVideoClick, className}: Props) => {
    const classNames = classnames('VideoCard');
    if (!video) {
        return null;
    }

    const { id, snippet, statistics, contentDetails } = video;
    const { thumbnails, title, channelTitle } = snippet;
    const { viewCount } = statistics;
    const { duration } = contentDetails;
    
    /* tslint:disable:no-string-literal */
    const mediumThumbnail = thumbnails['medium'];

    return (
        <li
            className={className}
            key={id}
            onClick={() => handleVideoClick!()}
        >
            <div className={classNames}>
                <div className="VideoCard__thumbnail">
                    <img
                        src={mediumThumbnail.url}
                        width="168"
                        alt={title}
                    />
                    <span className="VideoCard__duration">
                        {formatDuration(duration)}
                    </span>
                </div>
                <div className="VideoCard__metadata">
                    <h3 className="VideoCard__video-title-wrapper">
                        <span className="VideoCard__video-title">{title}</span>
                    </h3>
                    <span className="VideoCard__channel-title">
                        {channelTitle}
                    </span>
                    <span className="VideoCard__view-count">
                        {formatNumber(viewCount)} views
                    </span>
                </div>
            </div>
        </li>);
};

export default VideoCard;