import * as React from 'react';
import { get } from 'lodash';

import './ChannelCard.css';

interface Props {
    loadChannel?: Function,
    channelId?: string,
    channel?: GoogleApiYouTubeChannelResource        
};

class ChannelCard extends React.Component<Props> {
    render() {
        const channel: GoogleApiYouTubeChannelResource  = get(this.props, 'channel.items[0]');
        if(!channel) {
            return null;
        }

        const title: string = get(channel, 'snippet.title')
        const thumbnailUrl: string = get(channel, "snippet.thumbnails['default'].url");
        const thumbnailWidth: string = get(channel, "snippet.thumbnails['default'].width");
        const channelUrl: string = `https://www.youtube.com/channel/${channel.id}`;

        return (
            <div className="ChannelCard">
                <div className="ChannelCard__thumbnail">
                    <a href={channelUrl} title={title}>
                        <img src={thumbnailUrl} alt={title} width={thumbnailWidth} />
                    </a>
                </div>
                <div className="ChannelCard__details">
                    <span>{title}</span>
                </div>
            </div>
        );
    }
}

export default ChannelCard;