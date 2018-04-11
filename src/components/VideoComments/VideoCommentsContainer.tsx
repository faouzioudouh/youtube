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
            comments: undefined,
            isLoading: false,
        };
    }

    componentWillReceiveProps(newProps: Props) {
        this.getVideoComments(newProps.video.id);
    }

    componentDidMount() {
        this.getVideoComments(this.props.video.id);
    }

    getVideoComments(videoId: string) {
        this.setState({ isLoading: true });
        getVideoComments(videoId)((comments: Comment[]) => {
            this.setState({
                comments,
                isLoading: false
            });
        });
    }

    render() {
        return (<VideoComments {...this.props}  comments={this.state.comments} />);
    }
}

export default VideoCommentsContainer;