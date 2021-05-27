import React from 'react';
import AlbumsContainer from '../../containers/albums/AlbumsContainer';
import ArtistsContainer from '../../containers/artists/ArtistsContainer';
import Header from '../Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TracksContainer from '../../containers/tracks/TracksContainer';
import LyricsContainer from '../../containers/lyrics/LyricsContainer';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ArtistsContainer} />
          <Route
            exact
            path="/:artistName/:artistId"
            component={AlbumsContainer}
          />
          <Route
            exact
            path="/:artistName/release/:releaseId"
            component={TracksContainer}
          />
          <Route
            exact
            path="/:artistName/track/:title"
            component={LyricsContainer}
          />
        </Switch>
      </Router>
    </>
  );
}
