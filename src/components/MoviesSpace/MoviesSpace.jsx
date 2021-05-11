import { useEffect, useState } from 'react';
import axios from 'axios';
import SMoviesSpace from '../StyledComponents/Smovies';

function MoviesSpace() {
  const [moviesSpace, setMoviesSpace] = useState([]);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/keyword/9882/movies?api_key=c909c07c7f46d4427d96a475dcb11666&language=en-US&include_adult=false`
      )
      .then(({ data }) => {
        setMoviesSpace(data.results);
      });
  }, [startX]);

  const slideShowPlus = () => {
    setStartX(startX + 1);
  };

  const slideShowMinus = () => {
    setStartX(startX - 1);
  };

  return (
    <SMoviesSpace>
      <ul>
        {startX > 0 && (
          <button className='arrowLeft' onClick={slideShowMinus}>
            <img className='arrow' src='/img/icon/arrowleft.png' alt='' />
          </button>
        )}
        {moviesSpace.slice(startX, startX + 5).map((movie) => {
          return (
            <>
              <li>
                <div className='image'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt=''
                  />
                  <figcaption>{movie.original_title}</figcaption>
                </div>
              </li>
            </>
          );
        })}
        {startX < 14 && (
          <button className='arrowRight' onClick={slideShowPlus}>
            <img className='arrow' src='/img/icon/arrowright.png' alt='' />
          </button>
        )}
      </ul>
    </SMoviesSpace>
  );
}

export default MoviesSpace;
