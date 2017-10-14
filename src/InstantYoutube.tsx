import * as React from 'react';
import Header from './components/Header';
import YoutubePlayer from './components/YoutubePlayer';
import NextVideos from './components/NextVideos';
import VideoDetails from './components/VideoDetails';
import storeProvider from './hoc/storeProvider';
import './App.css';

const logoProps = {
  src: 'http://ytinstant.com/images/logo3.png',
  alt: 'Instant youtube'
};

class App extends React.Component {
  render() {
    return (
      <div className="InstantYoutube">
        <div className="header__root-wrapper">
          <Header logo={logoProps} linkHome={'https://google.com'}  />
        </div>
        <main id="main">
          <div className="Video-player__wrapper">
            <YoutubePlayer />
            <div className="VideoDetails__root-wrapper">
              <VideoDetails />
            </div>
          </div>
          <div className="Next-videos__wrapper">
            <NextVideos />
          </div>
        </main>
      </div>
    );
  }
}

export default storeProvider(App);