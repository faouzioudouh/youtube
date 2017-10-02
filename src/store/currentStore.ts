import configureStore from './configureStore';

const initialState = {
    searchText: '814eR5K7KD8'
};

// The instance of the current store shared in the application.
const currentStore = configureStore(initialState);

export default currentStore;
