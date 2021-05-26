import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

function Artist({artistId, artistName}) {
   return (
      // <Link
      // to={`details/${artistId}`}
      // ></Link>
      <figure>
         <h2>{artistName}</h2>
         {/* <p>Hometown: {hometown}, {country}</p> */}
         </figure>
      
      
   )
}

Artist.propTypes = {
   artistId: PropTypes.string,
   artistName: PropTypes.string.isRequired,
   // hometown: PropTypes.string.isRequired,
   // country: PropTypes.string.isRequired,

}

export default Artist

