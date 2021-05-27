/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import ArtistList from '../../components/artists/ArtistList';
import ArtistControls from '../../components/controls/ArtistControls';
import Spinner from '../../components/Spinner';
import { getArtists } from '../../services/apiUtils';

function ArtistsContainer() {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState({});
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    getArtists(query, offset)
      .then(setArtists)
      .finally(() => setLoading(false));
  };

  const offset = (page - 1) * 25;

  useEffect(() => {
    if (!query) {
      setQuery('');
      setArtists([]);
    } else {
      getArtists(query, offset)
        .then(setArtists)
        .finally(() => setLoading(false));
    }
  }, [query, page]);

  const onQueryChangeHandler = ({ target }) => {
    setQuery(target.value);
    setPage(1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) return <Spinner />;
  return (
    <>
      <ArtistControls
        onSubmit={onSubmitHandler}
        query={query}
        onQueryChange={onQueryChangeHandler}
      />
      <button onClick={handlePrevPage} disabled={page < 2}>
        Prev
      </button>
      <p>{page}</p>
      <button onClick={handleNextPage} disabled={page > artists.count / 25}>
        Next
      </button>
      <ArtistList artists={artists.artists} />
    </>
  );
}

export default ArtistsContainer;
