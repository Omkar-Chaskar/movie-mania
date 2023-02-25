import React from 'react'

function Navbar() {
  return (
    <div className='header'>
        <h1>Movie Mania</h1>
        <input className='searchbar' type="text" placeholder='Search for a Movie...' />
    </div>
  )
}

export default Navbar