import { getIdsFromGoogleResponse, handleApiResponse } from './common';

export {
  loadYouTubeIframeAPI,
  getTopSearchResult,
  getVideosMetadata,
  getMostPopularVideos,
  getRelatedVideos
}

const YOUTUBE_VIDEO = 'youtube#video';
const YOUTUBE_SEARCH = 'search';
const YOUTUBE_VIDEOS = 'videos';

/**
 * Load youtube iframe API
 * @param {*} onPlayerReady 
 * @param {*} onPlayerStateChange 
 * @param {*} currentVideoId 
 */
const loadYouTubeIframeAPI = (
  onPlayerReady,
  onPlayerStateChange,
  currentVideoId) => {

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    const onYouTubeIframeAPIReady = () => {
      return new YT.Player('YoutubePlayer', {
        height: '405',
        width: '720',
        videoId: currentVideoId,
        playerVars: {
          autoplay: 0,
          cc_load_policy: 1,
          controls: 1,
          enablejsapi: 1,
          iv_load_policy: 3,
          showinfo: 0,
          playerapiid: 'ytplayer',
          rel: 0,
          loop: 0
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    };

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
};

/**
 * Get top search results
 * @param {*} keyword 
 * @param {*} dispatch 
 */
const getTopSearchResult = (keyword, dispatch) => {
  const request = youtubeSearchList({
    q: keyword,
  });

  return request()((response) => {
    const videosIds = getIdsFromGoogleResponse(response);
    getVideosMetadata(videosIds, dispatch);
  });}

/**
 * Get videos metadata
 * @param {*} videosIds 
 * @param {*} dispatch 
 * @param {*} options 
 */
const getVideosMetadata = (videosIds, dispatch, options) => {
  const request = youtubeSearchList({
    id: videosIds,
    part: 'snippet,contentDetails,statistics'
  });

  const responseCallback = handleApiResponse(dispatch, options);
  return request(YOUTUBE_VIDEOS)(responseCallback);
}

/**
 * Get most popular videos
 * @param {*} dispatch 
 */
const getMostPopularVideos = (dispatch) => {
  const request = youtubeSearchList({
    chart: 'mostPopular',
  });
  
  return request()((response) => {
    const videosIds = getIdsFromGoogleResponse(response);
    getVideosMetadata(videosIds, dispatch);
  });
}

/**
 * Get related videos
 * @param {*} videoId 
 */
const getRelatedVideos = (videoId) => (dispatch) => {
  const request = youtubeSearchList({
    relatedToVideoId: videoId
  });

  return request()((response) => {
    const videosIds = getIdsFromGoogleResponse(response);
    getVideosMetadata(videosIds, dispatch, {noPlay: true});
  });
}

/**
 * Youtube search list
 * @param {*} options 
 */
const youtubeSearchList = options => (TYPE = YOUTUBE_SEARCH) => callback => {
  const mergedOptions = Object.assign({}, {
    type: 'video',
    part: 'id',
  }, options);

  const request = gapi.client.youtube[TYPE].list(mergedOptions);
  return request.execute(callback);
}
