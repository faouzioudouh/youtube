import configureStore from './configureStore';

const initialState = {
    searchText: 'BYn6rQ3zVY4'
};

// The instance of the current store shared in the application.
const currentStore = configureStore(initialState);

export default currentStore;
