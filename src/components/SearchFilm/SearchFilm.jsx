import { Formik, Form } from 'formik';
import { Input, SearchButton } from './SearchFilm.styled';
import getFilmQuery from '../../apiJs/query';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmItem from 'components/FilmItem/FilmItem';
import { Loader } from 'components/Loader/Loader';
import ErrMessage from 'components/ErrMassage/ErrMassage';

const SearchFilm = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState();
  const [params, setParams] = useSearchParams();
  // console.log(useSearchParams());
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
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <SearchButton type="submit">Search</SearchButton>
          <Input type="text" name="film" placeholder="Enter film..." />
          {/* <ErrorMessage name="film" component="div" /> */}
        </Form>
      </Formik>
      {films && <FilmItem films={films} />}
    </div>
  );
};

export default SearchFilm;
