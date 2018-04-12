import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import YoutubePlayer from './YoutubePlayer';
import { currentVideo as currentVideoAction, YoutubeAction } from '../../actions/youtube';
import { Props, Player, TState, DispatchFromProps } from './types';
import { getRelatedVideos, getVideoById } from '../../libs/youtubeHelper.js';

import  {
  loadYouTubeIframeAPI,
  getTopSearchResult,
  getMostPopularVideos
} from '../../libs/youtubeHelper.js';

import { getVideoId } from '../../libs/common';

class YoutubePlayerContainer extends React.Component<Props, {}> {
  player: Player;

  constructor(props: Props) {
    super(props);

    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.playNextVideo = this.playNextVideo.bind(this);
  }

  componentDidMount() {
    loadYouTubeIframeAPI(
      this.onPlayerReady,
      this.onPlayerStateChange,
      this.props.urlVideoId);
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

  onPlayerReady({target}: Player) {
    this.player = target;

    if (!this.props.urlVideoId) {
      this.props.mostPopularVideosHandler();
    } else {

      getVideoById(this.props.urlVideoId, (video: GoogleApiYouTubeVideoResource) => {
        this.props.handleCurrentVideo(video);
      });

      this.props.relatedVideos(this.props.urlVideoId);
      this.player.playVideo();
    }
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

const mapStateToProps = ({ searchText, youtubeSetVideos, currentVideo, urlVideoId }: TState) => ({
  searchText,
  youtubeSetVideos,
  currentVideo,
  urlVideoId
});

const mapDispatchToProps = (dispatch: Dispatch<YoutubeAction>) => ({
  searchYoutubeVideos: (keyword: string) => getTopSearchResult(keyword, dispatch),
  mostPopularVideosHandler: () => getMostPopularVideos(dispatch),
  handleCurrentVideo: (video: GoogleApiYouTubeVideoResource) => dispatch(currentVideoAction(video)),
  relatedVideos: (videoId: string) => getRelatedVideos(videoId)(dispatch)
});

export default connect<TState, DispatchFromProps, void>
    (mapStateToProps, mapDispatchToProps)(YoutubePlayerContainer);