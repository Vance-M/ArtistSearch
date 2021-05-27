import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ lyrics }) {
  console.log(lyrics);
   return (
      <>
         {(!lyrics) ? 'sorry no lyrics' :
      <p data-testid='lyrics-p'>{lyrics.lyrics}</p>
         }
   </>)
      
}

Lyrics.propTypes = {
   lyrics: PropTypes.object.isRequired,
};

export default Lyrics;
