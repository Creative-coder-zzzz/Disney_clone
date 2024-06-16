import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "3b2939de8803a8843c7f2e819363a486";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=3b2939de8803a8843c7f2e819363a486";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
