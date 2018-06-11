import { combineReducers } from 'redux';
import { searchTerm, gifs } from './gifReducer';

const rootReducer = combineReducers({
  searchTerm,
  gifs
});

export default rootReducer;