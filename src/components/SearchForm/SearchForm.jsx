// import { Input, SearchButton } from 'components/SearchFilm/SearchFilm.styled';
// import { Formik, Form } from 'formik';
// import { useState } from 'react';

// import getFilmQuery from '../../apiJs/query';
// // import { useSearchParams } from 'react-router-dom';

// const SearchForm = () => {
//   const [params, setParams] = useState();
//   const [loader, setLoader] = useState(false);
//   const [error, setError] = useState(false);
//   const [films, setFilms] = useState();
//   console.log(params);

//   const initialValue = {
//     film: '',
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     setParams(values);
//     resetForm();

//   //    useEffect(() => {
//   //   const filmQuery = params.get('film');

//   //   const getMoveQuery = async () => {
//   //     try {
//   //       setLoader(true);
//   //       const {
//   //         data: { results },
//   //       } = await getFilmQuery(filmQuery);
//   //       setFilms(results);
//   //     } catch (error) {
//   //       setError(true);
//   //     } finally {
//   //       setLoader(false);
//   //     }
//   //   };
//   //   getMoveQuery(filmQuery);
//   // }, [params]);
//   // };

//   return (
//     <Formik initialValues={initialValue} onSubmit={handleSubmit}>
//       <Form autoComplete="off">
//         <SearchButton type="submit">Search</SearchButton>
//         <Input type="text" name="film" placeholder="Do it :)" />
//         {/* <ErrorMessage name="film" component="div" /> */}
//       </Form>
//     </Formik>
//   );
// };

// export default SearchForm;
