import { Formik, Form } from 'formik';
import { Input, SearchButton } from './SearchForm.styled';
// import { Input, SearchButton } from '/';

const SearchForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form autoComplete="off">
        <SearchButton type="submit">Search</SearchButton>
        <Input type="text" name="film" placeholder="Enter film..." />
      </Form>
    </Formik>
  );
};

export default SearchForm;
