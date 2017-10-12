import * as React from 'react';
import { Props } from './Types';

const VideoComments = (props: Props) => {
    const { comments } = props;
    
    return (<h1>HELLO COMMENTS {comments} </h1>);
}

export default VideoComments;