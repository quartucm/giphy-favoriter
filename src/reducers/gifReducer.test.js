import { gifs, searchTerm } from './gifReducer';
import * as types from '../actions/actionTypes';

describe('searchTerm reducer', () => {
  it('should return the initial state', () => {
    expect(searchTerm(undefined, {})).toEqual('');
  });

  it('should return a new search term', () => {
    expect(searchTerm('yeah', {})).toEqual('yeah');
  });
})
