import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovie } from "../features/movie/movieSlice";
import { getMovieDetail, selectMovieDetail } from "../features/detail/detailSlice";
import { addToViewCount } from "../features/viewCount/viewCountSlice";

function Movies({handleHide}) {

  const dispatch = useDispatch();

  const movieList = useSelector(selectMovie);
  const detail = useSelector(selectMovieDetail);

  return (
    <>  
      <ul className="cards">
        {movieList && movieList.map((movie) => {
          return (
            <li className="cards_item" onClick={() =>{ handleHide(false); dispatch(getMovieDetail(movie.id)); dispatch(addToViewCount(detail));}} key={movie.id}>
              <div className="card">
                <div className="card_image">
                  <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt=''/>
                </div>
                <div className="card_content">
                  <h2 className="card_title">{movie.original_title}</h2>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Movies