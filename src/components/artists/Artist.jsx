import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ artistId, artistName }) {
  return (
    <Link to={`/artist/${artistId}`}>
      <figure>
        <h2>{artistName}</h2>
        <p>{artistId}</p>
      </figure>
    </Link>
  );
}

Artist.propTypes = {
  artistId: PropTypes.string,
  artistName: PropTypes.string.isRequired,
  // hometown: PropTypes.string.isRequired,
  // country: PropTypes.string.isRequired,
};

export default Artist;
