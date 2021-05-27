import React, { useState, useEffect } from 'react';
import AlbumList from '../../components/albums/AlbumsList';
import { useParams } from 'react-router-dom';
import { getArtistById } from '../../services/apiUtils';
import Spinner from '../../components/Spinner';

function AlbumsContainer() {
  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { artistId, artistName } = useParams();
  const offset = (page - 1) * 10;

  console.log(artistName);

  useEffect(() => {
    getArtistById(artistId, offset)
      .then(setArtist)
      .finally(() => setLoading(false));
  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <button
        data-testid="prev-button"
        onClick={handlePrevPage}
        disabled={page < 2}
      >
        Prev
      </button>
      <p data-testid="page">{page}</p>
      <button
        data-testid="next-button"
        onClick={handleNextPage}
        disabled={page > artist.count / 10}
      >
        Next
      </button>
      <AlbumList releases={artist.albums} artistName={artistName} />
    </>
  );
}

export default AlbumsContainer;
