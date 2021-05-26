import React from 'react';
import PropTypes from 'prop-types';
import Tracks from './Tracks';

function TracksList({ tracks }) {
  return (
    <ul aria-label="track-list">
      {tracks.map(({
        title,
        recordingId,
        length 
      }) => (
        <li key={recordingId}>
          <Tracks
            title={title}
            recordingId={recordingId}
            length={length}
          />
        </li>
      ))}
    </ul>
  );
}

TracksList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      recordingId: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
    })
  ),
};

export default TracksList;
