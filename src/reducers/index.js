import searchText from './searchTextReducer';
import youtubeSetVideos from './youtube';
import currentVideo from './currentVideo';
import channel from './channel';

import { combineReducers } from 'redux';

export default combineReducers({
    searchText,
    youtubeSetVideos,
    currentVideo,
    channel
});