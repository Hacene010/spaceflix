import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MoviesDetails() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c909c07c7f46d4427d96a475dcb11666&language=en-US`
      )
      .then(({ data }) => {
        setMovies(data);
      })
      .catch(() => {
        setError('Broken');
      });
  }, [id]);

  if (error) {
    return <p>Broken again !</p>;
  }

  if (!movies) {
    return <p>Plz wait !</p>;
  }
  const martianTime = () => {
    return movies.runtime / 1.027;
  };
  return (
    <>
      <h2>Title: {movies.original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
        alt='avenger'
      />
      <p>
        Length: {Math.round(`${movies.runtime}` / 1.027)} mm --{movies.runtime}{' '}
        em
        {martianTime}
      </p>
      <p>Description: {movies.overview}</p>
      <p>Popularity: {movies.popularity}</p>
      <p>Score: {movies.vote_average}</p>
      {movies.release_date && <p>Release date: {movies.release_date}</p>}
    </>
  );
}
