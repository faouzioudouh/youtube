import * as React from 'react';
import { Props, State } from './Types';

// Video Comments
import VideoComments from './VideoComments';

class VideoCommentsContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            comments: undefined
        };
    }
    render() {
        return (<VideoComments {...this.props} />);
    }
}

export default VideoCommentsContainer;