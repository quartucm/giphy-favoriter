import * as gifActions from './gifActions';
import * as types from './actionTypes';

describe('gifActions', () => {
  it('should update the search term', () => {
    const text = 'Yeah';
    const expectedAction = {
      type: types.SEARCH_TERM,
      payload: 'Yeah'
    };
    expect(gifActions.setSearchTerm(text)).toEqual(expectedAction);
  })

  it('should save the users favorite GIF', () => {
    const mockData = {
      type: "gif",
      id: "RrVzUOXldFe8M",
      slug: "excited-yes-nicolas-cage-RrVzUOXldFe8M",
      url: "https://giphy.com/gifs/excited-yes-nicolas-cage-RrVzUOXldFe8M",
      bitly_gif_url: "https://gph.is/1hkTw7l",
      bitly_url: "https://gph.is/1hkTw7l",
      embed_url: "https://giphy.com/embed/RrVzUOXldFe8M",
      username: "",
      source: "https://gifhell.com/?heat=4513.30769666&t=16246824",
      rating: "pg",
      content_url: "",
      source_tld: "gifhell.com",
      source_post_url: "https://gifhell.com/?heat=4513.30769666&t=16246824",
      is_sticker: 0,
      import_datetime: "2014-02-25 10:07:59",
      trending_datetime: "2017-11-20 00:30:01",
      title: "excited lets go GIF",
      _score: 2500050.2,
    };

    const expectedAction = {
      type: types.SAVE_FAVORITE,
      gif: mockData,
      favorited: true
    };
    expect(gifActions.setFavorite(mockData, true)).toEqual(expectedAction);
  })
})
