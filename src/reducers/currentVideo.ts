import { CURRENT_VIDEO } from '../actions/youtube';

interface Action {
    video?: GoogleApiYouTubeVideoResource;
    type: string;
}

const currentVideo = (state = null, action: Action) => {
  switch (action.type) {
    case CURRENT_VIDEO:
        // Change page title to current video title.
        document.title = action.video!.snippet.title;
        return action.video;
    default:
      return state;
  }
};

export default currentVideo;