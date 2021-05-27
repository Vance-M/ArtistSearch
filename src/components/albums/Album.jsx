/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Album({ title, releaseId, releaseDate, artistName }) {

  const handleOnError = (e) => {
    e.target.src = 'http://placekitten.com/200/300';
  };

  console.log( artistName )
  return (
        
    <Link to={`/${artistName}/release/${releaseId}`} >
      <figure>
    
        <img 
          src={`http://coverartarchive.org/release/${releaseId}/front`} 
          alt={title}
          onError={handleOnError}

        />

        <figcaption>
          <h2>{title}</h2>
          <p>Release date: {releaseDate} </p>
        </figcaption>
      </figure>
    </Link>   
  );

}

Album.propTypes = {
  artistName: PropTypes.string.isRequired,
  releaseId:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  releaseDate:PropTypes.string.isRequired,

};

export default Album;

