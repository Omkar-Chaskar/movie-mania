import axios from "axios";

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/" + id + "?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US",
    });
    
    return { data };
  } catch (err) {
    console.error(err);
  }
};