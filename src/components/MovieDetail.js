import React from 'react'

function MovieDetail({handleShow}) {
  return (
    <div className='movie-detail' > 
          <div className='movie-poster'>
            <img className='movie-img' src="https://picsum.photos/300/400/?image=10" alt=''/>
          </div>
          <div className='movie-data'>
            <div className='movie-header'>
              <h2>Movie Title</h2>
              <p>2008</p>
              <p>Rating : <span>7.8</span></p>
            </div>
            <div className='movie-descrption'>
              <p>You can see movie description here, every movie have uniqe story, you can go throw description to get summery of story.</p>
            </div>
            <button className='movie-btn' onClick={() => handleShow(false)}>Close</button>
          </div>
    </div>
  )
}

export default MovieDetail