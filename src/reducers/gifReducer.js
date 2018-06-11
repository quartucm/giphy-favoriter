import { GET_GIFS, SAVE_FAVORITE, SEARCH_TERM } from '../actions/actionTypes';

export const gifs = (state = [], action) => {
  if (action.type === GET_GIFS) {
    return action.gifs;
  }
  if (action.type === SAVE_FAVORITE) {
    let newState = [...state];
    return newState.map((item, index) => {
      if (item.id !== action.gif.id) {
        return item;
      }
      return { ...item, favorited: action.favorited };
    });
  }
  return state;
};

export const searchTerm = (state = '', action) => {
  if (action.type === SEARCH_TERM) {
    return action.payload;
  }
  return state;
};
