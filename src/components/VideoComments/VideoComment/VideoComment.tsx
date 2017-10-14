import * as React from 'react';
import { get } from 'lodash';

import { Comment } from '../Types';
import Expander from '../../Expander';
import FormatString from '../../../helpers/FormatString';
import YTime from '../../../helpers/YTime';

import './VideoComment.css';

const VideoComment: React.StatelessComponent<Comment> = (props: Comment) => {    
    const textDisplay: string = get(props, 'snippet.topLevelComment.snippet.textDisplay');
    const authorChannelUrl: string = get(props, 'snippet.topLevelComment.snippet.authorChannelUrl');
    const authorDisplayName: string = get(props, 'snippet.topLevelComment.snippet.authorDisplayName');
    const authorProfileImageUrl: string = get(props, 'snippet.topLevelComment.snippet.authorProfileImageUrl');
    const publishedAt: string = get(props, 'snippet.topLevelComment.snippet.publishedAt');
    
    return (
    <article className="Comment">
        <div className="author-thumbnail">
            <div className="ChannelCard">
                <div className="ChannelCard__thumbnail">
                    <a href={authorChannelUrl} title={authorDisplayName}>
                        <img src={authorProfileImageUrl} alt={authorDisplayName} width="40" height="40" />
                    </a>
                </div>
                <div className="ChannelCard__details">
                    <a href={authorChannelUrl} title={authorDisplayName} className="ChannelCard__link">
                        {authorDisplayName}
                        <span className="ChannelCard__video-publish-date">
                            <YTime date={publishedAt} format="LL" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div className="Comment__body">
            <Expander collapsedHeight="60" collapsedClass="colapsed" expandedClass="expanded">
                <FormatString text={textDisplay} tagName="p" />
            </Expander>
        </div>
    </article>);
};

export default VideoComment;