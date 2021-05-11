import MoviesSpace from './components/MoviesSpace/MoviesSpace';
import MoviesNasa from './components/MoviesNasa/MoviesNasa';
import MoviesMars from './components/MoviesMars/MoviesMars';
import TvShow from './components/TvShow/TvShow';
import './reset.css';

function App() {
  return (
    <div>
      <MoviesSpace />
      <TvShow />
      <MoviesNasa />
      <MoviesMars />
    </div>
  );
}

export default App;
