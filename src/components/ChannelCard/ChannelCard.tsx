import * as React from 'react';
import { get } from 'lodash';

import YTime from '../../helpers/YTime';

import './ChannelCard.css';

interface Props {
    loadChannel?: Function;
    channelId?: string;
    publishedAt: string;
    channel?: GoogleApiYouTubeChannelResource;
}

class ChannelCard extends React.Component<Props> {
    render() {
        const channel: GoogleApiYouTubeChannelResource  = get(this.props, 'channel.items[0]');
        if (!channel) {
            return null;
        }

        const { publishedAt } = this.props;        
        const title: string = get(channel, 'snippet.title');
        const thumbnailUrl: string = get(channel, "snippet.thumbnails['default'].url");
        const channelUrl: string = `https://www.youtube.com/channel/${channel.id}`;

        return (
            <div className="ChannelCard">
                <div className="ChannelCard__thumbnail">
                    <a href={channelUrl} title={title}>
                        <img src={thumbnailUrl} alt={title} width="48" height="48" />
                    </a>
                </div>
                <div className="ChannelCard__details">
                    <a href={channelUrl} title={title} className="ChannelCard__link">
                        {title}
                    </a>
                    <span className="ChannelCard__video-publish-date">
                        Published on <YTime date={publishedAt} format="LL" />
                    </span>
                </div>
            </div>
        );
    }
}

export default ChannelCard;