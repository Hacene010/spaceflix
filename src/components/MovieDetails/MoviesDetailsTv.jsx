import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import SMovieDetails from './SMovieDetails';

export default function MoviesDetailsTv() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=c909c07c7f46d4427d96a475dcb11666&language=en-US`
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

  function hadleClick() {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      const name =
        movies?.name ||
        movies?.original_name ||
        movies?.title ||
        movies?.original_title;
      movieTrailer(name).then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      });
    }
  }

  return (
    <SMovieDetails>
      <div className='container'>
        <div className='title-img'>
          <h2>{movies.name}</h2>
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
          {movies.last_air_date && <p>Release date: {movies.last_air_date}</p>}
          <button onClick={() => hadleClick()}>See the Trailer</button>
          {trailerUrl && <YouTube videoId={trailerUrl} />}
        </div>
      </div>
    </SMovieDetails>
  );
}
