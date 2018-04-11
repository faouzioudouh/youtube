import URI from 'urijs';
import configureStore from './configureStore';

const initialState = {
    searchText: '814eR5K7KD8'
};

// The instance of the current store shared in the application.
const currentStore = configureStore(initialState);

currentStore.subscribe(() => {
    const videoId = currentStore.getState().currentVideo ? currentStore.getState().currentVideo.id : null;
    const newUrl = URI(document.location.href).query({v:  videoId }).toString();
    history.pushState(null, '', newUrl);
});

export default currentStore;
