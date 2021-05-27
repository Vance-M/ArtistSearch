import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lyrics from '../../components/lyrics/Lyrics';
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

  const myFunction = () => {
    setTimeout(function () {
      alert('sorry no lyrics');
    }, 3000);
  };

  return loading ? <h1>Loading...</h1> : <Lyrics lyrics={lyrics} />;
}

export default LyricsContainer;
