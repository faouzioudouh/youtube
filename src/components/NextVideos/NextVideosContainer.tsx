import { connect } from 'react-redux';
import NextVideos from './NextVideos';

interface Props {
  youtubeSetVideos: Array<GoogleApiYouTubeVideoResource>;
  currentVideo: GoogleApiYouTubeVideoResource;
  className: string;
}

const mapStateToProps = ({youtubeSetVideos, currentVideo}: Props) => ({
  youtubeSetVideos,
  currentVideo
});

export default connect(mapStateToProps)(NextVideos);