import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GifRectangle.css';

class GifRectangle extends Component {
  constructor(props) {
    super(props);

    this.toggleFavoritedClass = this.toggleFavoritedClass.bind(this);

    this.state = {
      favorited: false
    }
  }

  componentDidMount() {
    const { favorited } = this.props;
    this.setState({ favorited });
  }

  toggleFavoritedClass() {
    if (!this.props.disableClick) {
      const newFavorite = !this.state.favorited;
      this.setState({favorited: newFavorite});
      this.props.onClick(this.props, newFavorite);
    }
  }

  render() {
    return (
      <div onClick={this.toggleFavoritedClass} 
        className={this.state.favorited ? "GifRectangle GifRectangle--favorited" : "GifRectangle"}>
        <img src={this.props.images.downsized_medium.url}
            alt={this.props.title}  
            className={this.state.favorited ? "GifRectangle__image GifRectangle__image--favorited" : "GifRectangle__image"}     
          />
      </div>
    );
  }
}

GifRectangle.propTypes = {
  title: PropTypes.string.isRequired,
  favorited: PropTypes.bool,
  images: PropTypes.object.isRequired,
  disableClick: PropTypes.bool,
  onClick: PropTypes.func
};

export default GifRectangle;