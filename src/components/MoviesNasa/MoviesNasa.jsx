import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SMoviesNasa = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    text-align: center;
    margin-top: 5vh;
  }
`;

function MoviesNasa() {
  const [moviesNasa, setMoviesNasa] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/keyword/1432/movies?api_key=c909c07c7f46d4427d96a475dcb11666&language=en-US&include_adult=false`
      )
      .then(({ data }) => {
        setMoviesNasa(data.results);
      });
  }, []);

  return (
    <SMoviesNasa>
      <ul>
        {moviesNasa.map((movie) => {
          return (
            <li>
              {' '}
              <h2>{movie.original_title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=''
              />
            </li>
          );
        })}
      </ul>
    </SMoviesNasa>
  );
}

export default MoviesNasa;
