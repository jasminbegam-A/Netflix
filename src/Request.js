const key='fd583bbabb4a060bf993b3b55cc9483c'
const requests = {
requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
requestHorror: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
export default requests