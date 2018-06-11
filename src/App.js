import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/createStore';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header'
import Favorites from './Favorites';
import SearchPage from './SearchPage';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="AppContainer">
            <Header />
            <Route exact path="/" component={SearchPage} />
            <Route path="/favorites" component={Favorites} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;