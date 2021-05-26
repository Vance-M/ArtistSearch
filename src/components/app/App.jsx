import React from 'react';
import AlbumsContainer from '../../containers/albums/AlbumsContainer';
import ArtistsContainer from '../../containers/artists/ArtistsContainer';
import Header from '../Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TracksContainer from '../../containers/tracks/TracksContainer';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ArtistsContainer} />        
          <Route exact path="/artist/:artistId" component={AlbumsContainer} />
          <Route exact path="/release/:releaseId" component={TracksContainer} />
        </Switch>
      </Router>
    </>
  );
}
