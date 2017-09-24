import VideoDetails from './VideoDetails';
import { connect } from 'react-redux';

interface TState {
    currentVideo: GoogleApiYouTubeVideoResource;
}

const mapStateToProps = ({currentVideo}: TState) => ({video: currentVideo});

export default connect(mapStateToProps)(VideoDetails);