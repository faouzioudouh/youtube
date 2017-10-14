import * as React from 'react';
import { formatNumber } from '../../libs/formatNumber';
import './VideoDetails.css';

import ChannelCard from '../ChannelCard';
import FormatString from '../../helpers/FormatString';
import Expander from '../../components/Expander';
import VideoComments from '../../components/VideoComments';

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
                <h3><span>{title}</span></h3>
            </div>
            <div className="VideoDetails__metadata">
                <div className="VideoDetails__metadata-views-count">
                    <span aria-label={`${viewCount} Views`}>{formatNumber(viewCount)} VIEWS</span>
                </div>
                <div className="VideoDetails__metadata-reactions">
                    <span>{formatNumber(likeCount)} Likes | {formatNumber(dislikeCount)} Dislikes</span>
                </div>
            </div>
            <div className="VideoDetails__description">
                <ChannelCard {...ChannelProps} />
                <Expander collapsedHeight="60" collapsedClass="colapsed" expandedClass="expanded">
                    <FormatString text={description} tagName="p" />
                </Expander>
            </div>
            <div className="VideoComments__wrapper">
              <VideoComments video={video} />
            </div>
        </div>
    );
};

export default VideoDetails;