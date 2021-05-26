import React, { useState, useEffect } from 'react';
import AlbumList from '../../components/albums/AlbumsList';
import { useParams } from 'react-router-dom';
import { getArtistById } from '../../services/apiUtils';

function AlbumsContainer() {
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  const { artistId } = useParams();
  useEffect(() => {
    getArtistById(artistId)
      .then(setArtist)
      .finally (() => setLoading(false));

  }, []);
  console.log(artist);
  return loading ? (<h1>Loading...</h1>) :
    (
      <>
        <AlbumList releases={artist}/>
    
      </>
    );
}

export default AlbumsContainer;
