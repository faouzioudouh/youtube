export interface Props {
    searchText: string;
    youtubeSetVideos: Array<GoogleApiYouTubeVideoResource>;
    searchYoutubeVideos: (keyword: string) => void;
    relatedVideos: (keyword: string) => void;
    mostPopularVideosHandler: () => void;
    currentVideo: GoogleApiYouTubeVideoResource;
    handleCurrentVideo: (video: GoogleApiYouTubeVideoResource) => void;
    urlVideoId: string;
}

export interface Player {
    playVideo: () => void;
    loadVideoById: (videoId: string) => void;
    target: Player;
}

export interface TState {
    searchText: string;
    urlVideoId: string;
    youtubeSetVideos: Array<GoogleApiYouTubeVideoResource>;
    currentVideo: GoogleApiYouTubeVideoResource;
}

export interface DispatchFromProps {
    searchYoutubeVideos: (keyword: string) => void;
    mostPopularVideosHandler: () => void;
    handleCurrentVideo: (video: GoogleApiYouTubeVideoResource) => void;
    relatedVideos: (keyword: string) => void;    
}