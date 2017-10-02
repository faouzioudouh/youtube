import { SEARCH_TEXT_CHANGED } from '../actions/searchText';

interface Action {
    type?: string;
    text?: string;
}

const searchText = (state: string =  '', action: Action = {}) => {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
        return action.text;
    default:
      return state;
  }
};

export default searchText;