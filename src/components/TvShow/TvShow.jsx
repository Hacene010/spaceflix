import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const StvShow = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    text-align: center;
    margin-top: 5vh;
  }
  li {
    position: relative;
  }

  figcaption {
    position: absolute;
    width: 500px;
    height: 285px;

    bottom: 0;
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
      border-left: 2px solid white;
      border-right: 2px solid white;
      transform: scaleY(0);
    }

    ::after {
      width: 90%;
      height: 80%;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
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

function TvShow() {
  const [TvShow, setTvShow] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/4629/similar?api_key=c909c07c7f46d4427d96a475dcb11666&language=en-US&page=1`
      )
      .then(({ data }) => {
        setTvShow(data.results);
      });
  }, []);

  return (
    <StvShow>
      <ul>
        {TvShow.map((movie) => {
          return (
            <li>
              {' '}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=''
              />
              <figcaption>{movie.original_name}</figcaption>
            </li>
          );
        })}
      </ul>
    </StvShow>
  );
}

export default TvShow;
