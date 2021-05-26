import React from 'react'
import PropTypes from 'prop-types'

function ArtistControls({ onSubmit, query,
   onQueryChange
}) {
   return (
     <form onSubmit={onSubmit}>
         <label htmlFor="artist-search">
         <input
            id='artist-search'
            placeholder='Artist Search'
            type='text'
            value={query}
            onChange={onQueryChange}
            />
         </label>
       <button>Search</button>
     </form>
   );
}

ArtistControls.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   query: PropTypes.string.isRequired,
   onQueryChange: PropTypes.func.isRequired,
}

export default ArtistControls

