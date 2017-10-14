import * as React from 'react';
import { Props, Comment } from './Types';
import VideoComment from './VideoComment';

const VideoComments: React.StatelessComponent<Props> = (props: Props) => {
    const { comments } = props;

    const renderComments = (commentsToRender?: Comment[]) => {
        return (commentsToRender || []).map( (comment: Comment)  => (
            <VideoComment key={comment.id} {...comment} />
        ));
    };
    
    return (<div> {renderComments(comments)} </div>);
};

export default VideoComments;