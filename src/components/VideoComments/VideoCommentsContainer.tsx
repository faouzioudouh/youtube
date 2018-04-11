import * as React from 'react';
import { Props, State, Comment } from './Types';

import  { getVideoComments } from '../../libs/youtubeHelper.js';
  
// Video Comments
import VideoComments from './VideoComments';

class VideoCommentsContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.getVideoComments = this.getVideoComments.bind(this);
        this.state = {
            comments: undefined
        };
    }

    // shouldComponentUpdate(nextProps: Props) {
    //     return nextProps.video.id !== this.props.video.id;
    // }

    componentDidUpdate() {
        this.getVideoComments(this.props.video.id);
    }

    componentDidMount() {
        this.getVideoComments(this.props.video.id);
    }

    getVideoComments(videoId: string) {
        getVideoComments(videoId)((comments: Comment[]) => {
            this.setState({comments});
        });
    }

    render() {
        return (<VideoComments {...this.props}  comments={this.state.comments} />);
    }
}

export default VideoCommentsContainer;