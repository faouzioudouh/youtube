import * as React from 'react';
import VideoCard from '../VideoCard';
import * as classnames from 'classnames';
import  { getVideoId } from '../../libs/common';

interface Props {
    youtubeSetVideos: Array<GoogleApiYouTubeVideoResource>;
    currentVideo: GoogleApiYouTubeVideoResource;
}

const NextVideos = ({ youtubeSetVideos, currentVideo }: Props) => {    
    if (!youtubeSetVideos.length) {
        return null;
    }

    const renderVideoCard = (video: GoogleApiYouTubeVideoResource, index: number) => {
        const cardClassNames = classnames('VideoCard__list-item', {
            'VideoCard__list-item--current': getVideoId(video) === getVideoId(currentVideo)
        });
        return (<VideoCard key={`${index}_${video.id}`} video={video} className={cardClassNames} />);
    };

    return (
        <div className="NextVideos">
            <ul className="VideoCard__list">
                {(youtubeSetVideos || []).map(renderVideoCard)}
            </ul>
        </div>
    );
};

export default NextVideos;