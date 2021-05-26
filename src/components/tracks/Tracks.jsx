import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Tracks({ title, recordingId, length }) {
  const convertMilli = ({ length }) => {
    const minutes = Math.floor(length / 60000);
    const seconds = ((length % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <div>
      <Link to={`/track/${recordingId}`}>
        <h1>{title}</h1>
        {!length ? 'N/A' : <p>Playtime : {convertMilli({ length })}</p>}
      </Link>
    </div>
  );
}

Tracks.propTypes = {
  recordingId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Tracks;
