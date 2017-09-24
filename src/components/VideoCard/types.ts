export interface Props {
    video: GoogleApiYouTubeVideoResource;
    handleVideoClickDispatch?: (video: GoogleApiYouTubeVideoResource) => void;
    className: string;
}

export interface DispatchFromProps {
    handleVideoClickDispatch: (video: GoogleApiYouTubeVideoResource) => void;    
}

export interface TState {
    currentVideo: GoogleApiYouTubeVideoResource;
}
