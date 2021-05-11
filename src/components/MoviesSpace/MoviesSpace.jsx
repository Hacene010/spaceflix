import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SMoviesSpace = styled.div`
  ul {
    position: relative;
    flex-wrap: nowrap;
    display: flex;
    list-style-type: none;
    text-align: center;
    margin-top: 5vh;
  }

  img {
    width: 100%;
  }

  .arrow {
    width: 20px;
  }

  .arrowRight {
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 10px;

    :hover {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.65) 100%
      );
    }
  }

  .arrowLeft {
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 10px;
    z-index: 0;
    :hover {
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.65) 100%
      );
      z-index: 0;
    }
  }
  figcaption {
    margin-right: 30px;
    margin-left: 30px;
    position: absolute;
    width: 250px;
    height: 100%;
    top: 0;
    background-color: #0008;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.2s all ease-in-out;
    text-transform: uppercase;
    font-weight: bold;
    color: white;

    ::before,
    ::after {
      content: '';
      position: absolute;
      transition: 0.5s all ease-in-out;
    }

    ::before {
      width: 80%;
      height: 90%;
      border-left: 2px solid #e50914;
      border-right: 2px solid #e50914;
      transform: scaleY(0);
    }

    ::after {
      width: 90%;
      height: 80%;
      border-top: 2px solid #e50914;
      border-bottom: 2px solid #e50914;
      transform: scaleX(0);
    }

    &:hover {
      opacity: 1;
      ::before {
        transform: scaleY(1);
      }
      ::after {
        transform: scaleX(1);
      }
    }
  }
`;

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
