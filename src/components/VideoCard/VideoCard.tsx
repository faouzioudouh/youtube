import * as React from 'react';
import * as classnames from 'classnames';

import { formatNumber } from '../../libs/formatNumber';
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

    const { id, snippet, statistics } = video;
    const { thumbnails, title, channelTitle } = snippet;
    const { viewCount } = statistics;
    
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