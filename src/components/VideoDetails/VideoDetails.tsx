import * as React from 'react';
import { formatNumber, formatNumberCommas } from '../../libs/formatNumber';
import './VideoDetails.css';

import ChannelCard from '../ChannelCard';
import FormatString from '../../helpers/FormatString';
import Expander from '../../components/Expander';
import VideoComments from '../../components/VideoComments';
import Icon from '../../components/Icon';

interface Props {
    video: GoogleApiYouTubeVideoResource;
}

const VideoDetails = ({video}: Props) => {
    if (!video) {
        return null;
    }

    const { snippet, statistics } = video;
    const {
        title,
        channelId,
        channelTitle,
        description,
        publishedAt } = snippet;

    const { dislikeCount,
            likeCount,
            commentCount,
            viewCount} = statistics;

    const ChannelProps = {
        channelId,
        channelTitle,
        description,
        publishedAt
    };

    return (
        <div className="VideoDetails">
            <div className="VideoDetails__title">
                <h1><span>{title}</span></h1>
            </div>
            <div className="VideoDetails__metadata">
                <div className="VideoDetails__metadata-views-count">
                    <span>{formatNumberCommas(viewCount)} views</span>
                </div>

                <div className="flex-fix"></div>

                <div className="VideoDetails__metadata-reactions">
                    <div className="VideoDetails__metadata-reactions--icon">
                        <Icon iconName="Thumbsup" className="like-icon" title="like" />
                        <span className="VideoDetails__metadata-reactions--info">
                            {formatNumber(likeCount)}
                        </span>
                    </div>
                    <div className="VideoDetails__metadata-reactions--icon">
                        <Icon iconName="Thumbsup" className="deslike-icon" title="deslike" />
                        <span className="VideoDetails__metadata-reactions--info">
                            {formatNumber(dislikeCount)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="VideoDetails__description">
                <div className="VideoDetails__description-user-card">
                    <ChannelCard {...ChannelProps} />                
                </div>
                <div className="VideoDetails__description-details">
                    <Expander collapsedHeight="60" collapsedClass="colapsed" expandedClass="expanded">
                        <FormatString text={description} tagName="p" />
                    </Expander>
                </div>
            </div>
            <div className="VideoComments__wrapper">
                <div className="VideoComments__header">
                    <h2 className="VideoComments__header-coment-count">
                        {formatNumberCommas(commentCount)} Comments
                    </h2>
                </div>
              <VideoComments video={video} />
            </div>
        </div>
    );
};

export default VideoDetails;