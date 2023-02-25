import axios from "axios";

export const fetchMovie = async (movieName) => {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/search/movie?api_key=b56058299cbea0093f5ccfb9e43c52a4&language=en-US&query="+ movieName +"&page=1&include_adult=false",
      });
      return { data };
    } catch (err) {
      console.error(err);
    }
};
