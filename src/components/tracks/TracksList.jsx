import React from 'react';
import PropTypes from 'prop-types';
import Tracks from './Tracks';

function TracksList({ tracks, artistName }) {
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
            artistName={artistName}
          />
        </li>
      ))}
    </ul>
  );
}

TracksList.propTypes = {
  artistName: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      recordingId: PropTypes.string.isRequired,
        length: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
    }).isRequired,
  ),
};

export default TracksList;
