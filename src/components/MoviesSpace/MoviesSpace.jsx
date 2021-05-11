import { useEffect, useState } from 'react';
import axios from 'axios';

function MoviesSpace() {
  const [moviesSpace, setMoviesSpace] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/keyword/9882/movies?api_key=c909c07c7f46d4427d96a475dcb11666&language=en-US&include_adult=false`
      )
      .then(({ data }) => {
        setMoviesSpace(data.results);
      });
  }, []);

  return (
    <>
      <ul>
        {moviesSpace.map((movie) => {
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
    </>
  );
}

export default MoviesSpace;
