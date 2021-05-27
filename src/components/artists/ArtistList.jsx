import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function ArtistList({ artists }) {
  return (
    <>
      <ul aria-label="artist-list">
        {artists && artists.map((
          { artistId,
            artistName }) => (
          <li key={artistId}>
            <Artist
              artistName={artistName}
              artistId={artistId}
              // hometown={hometown}
              // country={country}
            />
          </li>
        ))}

      </ul>
    </>
  );
}

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      artistId: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      // hometown: PropTypes.string.isRequired,
      // country: PropTypes.string.isRequired,
    }).isRequired
  )
};

export default ArtistList;

