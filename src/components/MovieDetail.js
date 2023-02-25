import React from "react";
import { getMovieDetail } from "../features/detail/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../features/favorite/favoriteSlice";


function MovieDetail({ handleHide, detail }) {
  const dispatch = useDispatch();

  const favorite = useSelector((store) => store.favorite);
  const viewCount = useSelector((store) => store.viewCount);

  const newDetail = viewCount?.viewCount?.some(item=> item.id === detail.id)? viewCount.viewCount.find(item=> item.id === detail.id) : detail;

  const isFavorite = favorite?.favorite?.some((item) => item.id === detail.id);

  return (
    <div className="movie-detail">
      <div className="movie-poster">
        <img
          className="movie-img"
          src={"https://image.tmdb.org/t/p/w500" + newDetail.poster_path}
          alt=""
        />
      </div>
      <div className="movie-data">
        <div className="movie-header">
          <h2>{newDetail.original_title}</h2>
          <p>{newDetail.release_date}</p>
          <p>
            Rating : <span>{newDetail.vote_average}</span>
          </p>
          <p>
            view Count : <span>{newDetail.vote_count}</span>
          </p>
        </div>
        <div className="movie-descrption">
          <p>{newDetail.overview}</p>
        </div>
        <section className="body-mark">
          {isFavorite ? (
            <button
              className="fav-button"
              onClick={() => {
                dispatch(removeFromFavorite(newDetail));
              }}
            >
              Unmark as Favorite
            </button>
          ) : (
            <button
              className="fav-button"
              onClick={() => {
                dispatch(addToFavorite(newDetail));
              }}
            >
              Mark as Favorite
            </button>
          )}
        </section>
        <button
          className="movie-btn"
          onClick={() => {
            handleHide(true);
            dispatch(getMovieDetail());
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieDetail;
