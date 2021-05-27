import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lyrics from '../../components/lyrics/Lyrics';
import Spinner from '../../components/Spinner';
import { getLyrics } from '../../services/apiUtils';

function LyricsContainer() {
  const [lyrics, setLyrics] = useState({});
  const [loading, setLoading] = useState(true);

  const { artistName, title } = useParams();

  useEffect(() => {
    getLyrics(artistName, title)
      .then(setLyrics)
      // .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }, []);

  console.log(lyrics);

  return loading ? (
    <Spinner />
  ) : (
    <div data-testid="lyrics-p">
      <Lyrics lyrics={lyrics} />
    </div>
  );
}

export default LyricsContainer;
