/**
 * @module  actions/SearchText
 */

/**
 * @const {string}
 */
export const YOUTUBE_SET_VIDEOS = 'YOUTUBE_SET_VIDEOS';
export const CURRENT_VIDEO = 'CURRENT_VIDEO';

export interface SetYoutubeVideos {
    type: string;
    videos: Array<GoogleApiYouTubeVideoResource>;
}

export interface CurrentVideo {
    type: string;
    video: GoogleApiYouTubeVideoResource;
}

export type YoutubeAction = CurrentVideo | SetYoutubeVideos;

/**
 * @function searchTextUpdated
 *
 * @description  Return an `action`
 * @return {Object}
 */
export const setYoutubeVideos = (videos: Array<GoogleApiYouTubeVideoResource>) => ({
    type: YOUTUBE_SET_VIDEOS,
    videos: videos
});

export const currentVideo = (video: GoogleApiYouTubeVideoResource) => ({
        type: CURRENT_VIDEO,
        video: video
});
