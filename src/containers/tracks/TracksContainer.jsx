import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import TracksList from '../../components/tracks/TracksList';
import { getAlbumById } from '../../services/apiUtils';

function TracksContainer() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { releaseId, artistName } = useParams();

  useEffect(() => {
    getAlbumById(releaseId)
      .then(setTracks)
      .finally(() => setLoading(false));
  }, []);

  return loading ? (<h1>Loading...</h1>) :
    (
      <>
        <TracksList
          tracks={tracks}
          artistName={artistName}
        />
    
      </>
    );
}

export default TracksContainer;
