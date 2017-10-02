import { LOAD_CHANNEL } from '../actions/youtube';

interface Action {
    channel: Array<GoogleApiYouTubeVideoResource>;
    type: string;
}

const channel = (state = {}, action: Action) => {
  switch (action.type) {
    case LOAD_CHANNEL:
        return Object.assign({}, action.channel);
    default:
      return state;
  }
};

export default channel;