import { connect } from 'react-redux';
import UpNextVideo from './UpNextVideo';

interface Props {
  youtubeSetVideos: Array<GoogleApiYouTubeVideoResource>;
}

const mapStateToProps = ({youtubeSetVideos}: Props): { nextVideo: GoogleApiYouTubeVideoResource } =>
    ({ nextVideo: youtubeSetVideos[0]});

export default connect(mapStateToProps)(UpNextVideo);