import * as React from 'react';
import { get } from 'lodash';

import { Comment } from '../Types';
import Expander from '../../Expander';
import FormatString from '../../../helpers/FormatString';
import YTime from '../../../helpers/YTime';
import Icon from '../../../components/Icon';
import { formatNumber } from '../../../libs/formatNumber';

import './VideoComment.css';

export interface CommentSnippet {
    textDisplay: string;
    authorChannelUrl: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    publishedAt: string;
    likeCount: number;
}

const VideoComment: React.StatelessComponent<Comment> = (props: Comment) => {
    const snippet: CommentSnippet = get(props, 'snippet.topLevelComment.snippet');

    const { textDisplay,
        authorChannelUrl,
        authorDisplayName,
        publishedAt,
        likeCount,
        authorProfileImageUrl} = snippet;

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
                            <YTime date={publishedAt} format="fromNow" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div className="Comment__body">
            <Expander collapsedHeight="50" collapsedClass="colapsed" expandedClass="expanded">
                <FormatString text={textDisplay} tagName="p" />
            </Expander>
            <div className="Comment__toolbar">
                <div className="Comment__metadata-reactions-icon Comment__metadata-reactions-icon--like">
                    <Icon iconName="Thumbsup" className="like-icon" title="like" width="16" height="16" />
                    <span className="Comment__metadata-reactions-info">
                        {formatNumber(likeCount)}
                    </span>
                </div>
                <div className="Comment__metadata-reactions-icon">
                    <Icon iconName="Thumbsup" className="deslike-icon" title="deslike" width="16" height="16" />
                </div>
            </div>
        </div>
    </article>);
};

export default VideoComment;