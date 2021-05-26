import React, { useState, useEffect } from 'react';
import ArtistList from '../../components/artists/ArtistList';
import ArtistControls from '../../components/controls/ArtistControls';
import { getArtists } from '../../services/apiUtils';

function ArtistsContainer() {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1)
console.log(artists)
  
   
   const onSubmitHandler = async (e) => {
      e.preventDefault();
    
  };

   
   useEffect(() => {
      if (!query)
      {
         setQuery('');
         setArtists([]);
      } else
      {  
         getArtists(query)
            .then(setArtists)
            .finally(() => setLoading(false));
      } 
      }, [query]);
  
  const onQueryChangeHandler = ({ target }) => {
    setQuery(target.value);
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <ArtistControls
        onSubmit={onSubmitHandler}
        query={query}
        onQueryChange={onQueryChangeHandler}
      />
      <ArtistList artists={artists} />
    </>
  );
}

export default ArtistsContainer;
