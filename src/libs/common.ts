import { Dispatch } from 'redux';
import { setYoutubeVideos, currentVideo } from '../actions/youtube';

export {
    handleApiResponse,
    getVideoId,
    getIdsFromGoogleResponse
};

interface Response<T> {
    items: Array<T>;
}

interface Options {
    noPlay?: boolean;
}

const getIdsFromGoogleResponse = (response: Response<GoogleApiYouTubeSearchResource>) => 
    (response.items || []).map((video) => video.id.videoId)
    .join(',');

const handleApiResponse = (dispatch: Dispatch<{}>, options: Options = {}) => 
(response: Response<GoogleApiYouTubeVideoResource>) => {
  if (response.items.length) {
    dispatch(setYoutubeVideos(response.items));
    if (!options.noPlay) {
        const firstVideo = response.items[0];
        dispatch(currentVideo(firstVideo));        
    }
  }
};

const getVideoId = (video: GoogleApiYouTubeVideoResource) => {
  if (video && video.id) {
    return video.id;
  }
  return '';
};