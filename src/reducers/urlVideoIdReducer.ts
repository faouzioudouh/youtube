import { URL_VIDEO_ID_CHANGED } from '../actions/urlVideoId';

interface Action {
    type?: string;
    videoId?: string;
}

const urlVideoId = (state: string =  '', action: Action = {}) => {
  switch (action.type) {
    case URL_VIDEO_ID_CHANGED:
        return action.videoId;
    default:
      return state;
  }
};

export default urlVideoId;