import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

function AlbumsList({ releases, artistName }) {
  console.log('ALBUMLIST', artistName);
  return (
    <ul aria-label="release-list">
      {releases &&
        releases.map(({ title, releaseId, releaseDate }) => (
          <li key={releaseId}>
            <Album
              title={title}
              releaseId={releaseId}
              releaseDate={releaseDate}
              artistName={artistName}
            />
          </li>
        ))}
    </ul>
  );
}

AlbumsList.propTypes = {
  artistName: PropTypes.string.isRequired,
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      releaseId: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default AlbumsList;
