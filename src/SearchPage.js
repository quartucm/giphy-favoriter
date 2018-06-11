import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gifActions from './actions/gifActions';

import GifRectangle from './GifRectangle';

import './SearchPage.css';

export class SearchPage extends Component {
  constructor() {
    super();
    this.fetchGiphyData = this.fetchGiphyData.bind(this);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  selectGif(gif, status) {
    this.props.gifActions.setFavorite(gif, status);
  }

  fetchGiphyData(event) {
    event.preventDefault();
    this.props.gifActions.fetchGifs(this.props.searchTerm);
  }

  handleSearchTerm(event) {
    this.props.gifActions.setSearchTerm(event.target.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.fetchGiphyData}>
          <input
            type="text"
            placeholder="Enter some text to find a GIF!"
            onChange={this.handleSearchTerm}
            value={this.props.searchTerm}
            className="search-input"
          />
        </form>
        <div className="GifHolder">
            {this.props.gifs.map((gif, index) => {
              return <GifRectangle {...gif} 
                        key={gif.id} 
                        id={gif.id} 
                        onClick={this.selectGif}
                        favorited={gif.favorited}
                        />
            })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs,
    searchTerm: state.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gifActions: bindActionCreators(gifActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
