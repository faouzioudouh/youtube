import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import VideoCard from './VideoCard';
import { currentVideo as currentVideoAction } from '../../actions/youtube';
import { getRelatedVideos } from '../../libs/youtubeHelper.js';
import { TState, Props } from './types';

class VideoCardContainer extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.handleVideoClick = this.handleVideoClick.bind(this);
    }

    handleVideoClick () {
        this.props.handleVideoClickDispatch!(this.props.video);
    }

    render() {
        return (<VideoCard {...this.props} handleVideoClick={this.handleVideoClick} />);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
    handleVideoClickDispatch: (video: GoogleApiYouTubeVideoResource) => {
        dispatch(currentVideoAction(video));
        getRelatedVideos(video.id)(dispatch);
    }
});

const mapStateToProps = ({ currentVideo }: TState) => ({
    currentVideo,
});

const mergeProps = (stateProps: Object, dispatchProps: Object, ownProps: Object) => 
    Object.assign({}, ownProps, dispatchProps, stateProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(VideoCardContainer);