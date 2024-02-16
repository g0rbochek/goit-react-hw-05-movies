import React from 'react';
import FilmItem from 'components/MoviesList/MoviesList';

const ListMovies = ({ trendMovies }) => {
  return <FilmItem films={trendMovies} />;
};

export default ListMovies;
