import { GET_GIFS, SAVE_FAVORITE, SEARCH_TERM } from './actionTypes';

const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q='

export function setFavorite(gif, favorited) {
  return { type: SAVE_FAVORITE, gif: gif, favorited: favorited };
}

export function setSearchTerm(searchTerm) {
  return { type: SEARCH_TERM, payload: searchTerm };
}

export function receiveStuff(json) {
  return { type: GET_GIFS, gifs: json.data };
}

export function fetchGifs(term) {
  return dispatch => {
    fetch(`${API_URL}${term}`)
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(data => dispatch(receiveStuff(data)))
      .catch(err => {
        console.error(err);
      });
  };
}