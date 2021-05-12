import { useEffect, useState } from 'react';
import axios from 'axios';
import SMoviesNasa from '../StyledComponents/Smovies';
import { Link } from 'react-router-dom';

function MoviesNasa() {
  const [moviesNasa, setMoviesNasa] = useState([]);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/keyword/1432/movies?api_key=c909c07c7f46d4427d96a475dcb11666&language=en-US&include_adult=false`
      )
      .then(({ data }) => {
        setMoviesNasa(data.results);
      });
  }, []);

  const slideShowPlus = () => {
    setStartX(startX + 1);
  };

  const slideShowMinus = () => {
    setStartX(startX - 1);
  };

  return (
    <SMoviesNasa>
      <h2>Movies Nasa</h2>
      <ul>
        {startX > 0 && (
          <button className='arrowLeft' onClick={slideShowMinus}>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'></path>
            </svg>
          </button>
        )}
        {moviesNasa.slice(startX, startX + 5).map((movie) => {
          return (
            <>
              <Link to={`/movies/${movie.id}`}>
                <li>
                  <div className='image'>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt=''
                    />
                    <figcaption>{movie.original_title}</figcaption>
                  </div>
                </li>
              </Link>
            </>
          );
        })}
        {startX < 14 && (
          <button className='arrowRight' onClick={slideShowPlus}>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z'></path>
            </svg>
          </button>
        )}
      </ul>
    </SMoviesNasa>
  );
}

export default MoviesNasa;
