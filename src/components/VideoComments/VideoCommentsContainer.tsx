import * as React from 'react';

import { PropsContainer as Props, State, CommentsThread } from './Types';
import  { getVideoComments } from '../../libs/youtubeHelper.js';
import VideoComments from './VideoComments';
import Loader from '../Loader';

let scrollComponent: HTMLElement;

class VideoCommentsContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.getVideoComments = this.getVideoComments.bind(this);
        this.scrollListener = this.scrollListener.bind(this);

        this.state = {
            comments: [],
            isLoading: false,
            nextPageToken: '',
        };
    }

    componentWillReceiveProps(newProps: Props) {
        this.setState({ comments: [] });
        this.getVideoComments(newProps.video.id);
    }

    componentDidMount() {
        this.getVideoComments(this.props.video.id);
        this.attachScrollListener();    
    }

    attachScrollListener() {
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.scrollListener);
    }
    
    scrollListener() {
        if (!this.state.nextPageToken || this.state.isLoading) {
            return;
        }

       const rect = scrollComponent.getBoundingClientRect();
        if (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            this.getVideoComments(this.props.video.id, this.state.nextPageToken);
        }
    }

    handleRef(node: HTMLElement) {
        if (node) {
            scrollComponent = node;
        }
    }

    getVideoComments(videoId: string, pageToken?: string) {        
        this.setState({ isLoading: true });
        getVideoComments(videoId, pageToken)((res: CommentsThread) => {
            this.setState({
                comments: this.state.comments!.concat(res.items),
                isLoading: false,
                nextPageToken: res.nextPageToken
            });
        });
    }

    render() {
        return (
        <div>
            <VideoComments {...this.props}  comments={this.state.comments} handleRef={this.handleRef} />
            {this.state.isLoading ? <Loader classnames="comments__loader" /> : null}
        </div>
        );
    }
}

export default VideoCommentsContainer;