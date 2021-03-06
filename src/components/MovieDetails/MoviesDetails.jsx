import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import SMovieDetails from './SMovieDetails';

export default function MoviesDetails() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');

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

  useEffect(trailerOnLoad, [movies, trailerUrl]);

  function trailerOnLoad() {
    if (!trailerUrl) {
      const name = movies?.original_title || 'H2G2';
      movieTrailer(name).then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      });
    }
  }

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
    <SMovieDetails>
      <div className='container'>
        <div className='title-img'>
          <h2>{movies.original_title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt=''
          />
        </div>
        <div className='movie-infos'>
          <p className='desc'>Description :</p>
          <p>{movies.overview}</p>
          <p>
            Length : {Math.round(`${movies.runtime}` / 1.027)} mm --
            {movies.runtime} em
            {martianTime}
          </p>
          <p>Popularity : {movies.popularity}</p>
          <p>Score : {movies.vote_average}</p>
          {movies.release_date && <p>Release date: {movies.release_date}</p>}
          {trailerUrl && <YouTube className='youtube' videoId={trailerUrl} />}
        </div>
      </div>
    </SMovieDetails>
  );
}
