import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gifActions from './actions/gifActions';
import PropTypes from 'prop-types';
import GifRectangle from './GifRectangle';

class Favorites extends Component {
  render() {
    const message = this.props.gifs.length ? (
      <div className="GifHolder">
        {this.props.gifs
          .filter(gif => !!gif.favorited)
          .map((gif, index) => {
            return <GifRectangle 
                favorited={gif.favorited} 
                {...gif} 
                key={gif.id} 
                id={gif.id} 
                disableClick={true}/>
          })}
      </div>
      ) : (
        <p className="text-center">It doesn't look like you have any favorites saved, go to the homepage to find some!</p>
      );

    return (
      <div>
        {message}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gifActions: bindActionCreators(gifActions, dispatch)
  };
}

Favorites.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
