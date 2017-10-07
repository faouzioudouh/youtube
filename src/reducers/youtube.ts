import { YOUTUBE_SET_VIDEOS } from '../actions/youtube';

interface Action {
    videos?: Array<GoogleApiYouTubeVideoResource>;
    type: string;
}

const youtubeSetVideos = (state = [], action: Action) => {
  switch (action.type) {
    case YOUTUBE_SET_VIDEOS:
        return action.videos;
    default:
      return state;
  }
};

export default youtubeSetVideos;