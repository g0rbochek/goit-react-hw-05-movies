// import { Formik, Form } from 'formik';
// import { Input, SearchButton } from './SearchFilm.styled';
import getFilmQuery from '../../apiJs/query';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import FilmItem from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import ErrMessage from 'components/ErrMassage/ErrMassage';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from '../SearchForm/SearchForm';

const SearchFilm = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState();
  const [params, setParams] = useSearchParams();

  const initialValue = {
    film: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    setParams(values);
    resetForm();
  };

  useEffect(() => {
    const filmQuery = params.get('film');

    const getMoveQuery = async () => {
      try {
        setLoader(true);
        setError(false);
        const {
          data: { results },
        } = await getFilmQuery(filmQuery);
        setFilms(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getMoveQuery(filmQuery);
  }, [params]);

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrMessage />}
      <SearchForm initialValues={initialValue} onSubmit={handleSubmit} />
      {films && <MoviesList films={films} />}
    </div>
  );
};

export default SearchFilm;
