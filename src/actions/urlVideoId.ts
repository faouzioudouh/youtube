/**
 * @module  actions/UrlVideoId
 */

/**
 * @const {string}
 */
export const URL_VIDEO_ID_CHANGED = 'URL_VIDEO_ID_CHANGED';

/**
 * @function searchTextUpdated
 *
 * @description  Return an `action`
 * @return {Object}
 */
export const updateUrlVideoId = (videoId: string) => {
  return {
    type: URL_VIDEO_ID_CHANGED,
    videoId
  };
};