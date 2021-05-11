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
              <h2>{movie.original_name}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=''
              />
            </li>
          );
        })}
      </ul>
    </StvShow>
  );
}

export default TvShow;
