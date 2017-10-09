import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import YoutubePlayer from './YoutubePlayer';
import { currentVideo as currentVideoAction, YoutubeAction } from '../../actions/youtube';
import { Props, Player, TState, DispatchFromProps } from './types';

import  {
  loadYouTubeIframeAPI,
  getTopSearchResult,
  getMostPopularVideos
} from '../../libs/youtubeHelper.js';

import { getVideoId } from '../../libs/common';

class YoutubePlayerContainer extends React.Component<Props, {}> {
  player: Player;

  constructor() {
    super();

    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.playNextVideo = this.playNextVideo.bind(this);
  }

  componentDidMount() {
    loadYouTubeIframeAPI(
      this.onPlayerReady,
      this.onPlayerStateChange,
      this.props.searchText);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.searchText !== this.props.searchText) {
      this.props.searchYoutubeVideos(this.props.searchText);
    }

    const newVideoId = getVideoId(this.props.currentVideo);
    if (newVideoId !== getVideoId(prevProps.currentVideo)) {
      this.player.loadVideoById(newVideoId);
    }
  }

  playVideo(video: GoogleApiYouTubeVideoResource) {
    this.player.loadVideoById(getVideoId(video));    
  }

  onPlayerReady({target}: Player) {
    this.player = target;
    this.player.playVideo();
    this.props.mostPopularVideosHandler();    
  }

  onPlayerStateChange({data}: MessageEvent) {
    if (data === 0) { // Video ended
      this.playNextVideo();
    }
  }

  playNextVideo() {
    const { youtubeSetVideos } = this.props;
    let videoIndex = youtubeSetVideos.map(video => video.id).indexOf(this.props.currentVideo.id);
    // Play next video
    if (videoIndex !== -1 && videoIndex++ < youtubeSetVideos.length) {
      this.props.handleCurrentVideo(youtubeSetVideos[videoIndex]);
    }

    // Play first video
    if (videoIndex === -1) {
      this.props.handleCurrentVideo(youtubeSetVideos[0]);
    }
  }

  render() {
    return (<YoutubePlayer />);
  }
}

const mapStateToProps = ({searchText, youtubeSetVideos, currentVideo}: TState) => ({
  searchText,
  youtubeSetVideos,
  currentVideo
});

const mapDispatchToProps = (dispatch: Dispatch<YoutubeAction>) => ({
  searchYoutubeVideos: (keyword: string) => getTopSearchResult(keyword, dispatch),
  mostPopularVideosHandler: () => getMostPopularVideos(dispatch),
  handleCurrentVideo: (video: GoogleApiYouTubeVideoResource) => dispatch(currentVideoAction(video))
});

export default connect<TState, DispatchFromProps, void>
    (mapStateToProps, mapDispatchToProps)(YoutubePlayerContainer);