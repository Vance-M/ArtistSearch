import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

function AlbumsList({ releases }) {
  return (
    <ul aria-label="release-list">
      {releases.map(({
        title,
        releaseId,
        releaseDate,
      }) => 
        (<li key={releaseId}>
          <Album 
            title={title}
            releaseId={releaseId}
            releaseDate={releaseDate}    
          />
        </li>
        ))}
            
    </ul>
  );
}

AlbumsList.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      releaseId: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    }).isRequired
  )
};

export default AlbumsList;

