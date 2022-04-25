const API_KEY_TMBD ='e526b17b18905a2b876184a65e696ad9';

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY_TMBD}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY_TMBD}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY_TMBD}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY_TMBD}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY_TMBD}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY_TMBD}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY_TMBD}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY_TMBD}&with_genres=99`
};

export default request;