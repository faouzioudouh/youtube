import URI from 'urijs';
import configureStore from './configureStore';

const urlParsed = URI.parseQuery(document.location.search);
const initialState = {
    urlVideoId: urlParsed['v'] || '814eR5K7KD8',
};

// The instance of the current store shared in the application.
const currentStore = configureStore(initialState);

currentStore.subscribe(() => {
    const currentVideo = currentStore.getState().currentVideo;
    if (currentVideo) {
        const newUrl = URI(document.location.href).query({v:  currentVideo.id }).toString();
        history.pushState(null, '', newUrl);
    }
});

export default currentStore;
