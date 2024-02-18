import React from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const ListMovies = ({ trendMovies }) => {
  return <MoviesList films={trendMovies} />;
};

export default ListMovies;
