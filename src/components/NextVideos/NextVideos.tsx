import * as React from 'react';
import * as classnames from 'classnames';

import VideoCard from '../VideoCard';
import ToggleButton from '../ToggleButton';
import  { getVideoId } from '../../libs/common';

import './NextVideos.css';

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
            'VideoCard__list-item--current': getVideoId(video) === getVideoId(currentVideo),
            'VideoCard__list-item--first': index === 0
        });
        return (<VideoCard key={`${index}_${video.id}`} video={video} className={cardClassNames} />);
    };

    return (
        <div className="NextVideos">
            <div className="NextVideo__header">
                <div className="NextVideo__header-left">Up next</div>
                <div className="NextVideo__header-right">
                    <span className="NextVideo__header-autoplay-label">Autoplay</span>
                    <ToggleButton defaultChecked={true} />
                </div>
            </div>
            <ul className="VideoCard__list">
                {(youtubeSetVideos || []).map(renderVideoCard)}
            </ul>
        </div>
    );
};

export default NextVideos;