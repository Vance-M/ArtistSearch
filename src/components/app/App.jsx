import React from 'react';
import AlbumsContainer from '../../containers/albums/AlbumsContainer';
import ArtistsContainer from '../../containers/artists/ArtistsContainer';
import Header from '../Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/artist/:id" component={AlbumsContainer} />
          <Route exact path="/" component={ArtistsContainer} />
        </Switch>
      </Router>
    </>
  );
}
