import { Container } from 'components/Container/Container.styled';
import MoviesList from 'components/ListMovies/ListMovies';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section.styled';
import getFetch from '../apiJs/trend';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const trendMovies = async () => {
      try {
        setLoader(true);
        setError(false);
        const {
          data: { results },
        } = await getFetch();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    trendMovies();
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h1 style={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            Trending this week
          </h1>
          {loader && <Loader />}
          {movies.length > 0 && <MoviesList trendMovies={movies} />}
        </Container>
      </Section>
      {error && <div>Error, Please reload this page!</div>}
    </main>
  );
};

export default Home;
