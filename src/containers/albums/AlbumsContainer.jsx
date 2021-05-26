import React, { useState, useEffect } from 'react';
import AlbumList from '../../components/albums/AlbumsList';
import { useParams } from 'react-router-dom';
import { getArtistById } from '../../services/apiUtils';

function AlbumsContainer() {

  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const { artistId } = useParams();
  const offset = (page -1) * 10;

  useEffect(() => {
    getArtistById(artistId, offset)
      .then(setArtist)
      .finally (() => setLoading(false));

  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return loading ? (<h1>Loading...</h1>) :
    (
      <>
        <button onClick={handlePrevPage} disabled={page < 2}>Prev</button>
        <button onClick={handleNextPage} disabled={page > ((artist.count) / 10)}>Next</button>
        <AlbumList releases={artist.albums}/>
    
      </>
    );
}

export default AlbumsContainer;
