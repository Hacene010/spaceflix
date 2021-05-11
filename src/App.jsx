import Header from './components/Header/Header';
import MoviesSpace from './components/MoviesSpace/MoviesSpace';
import MoviesNasa from './components/MoviesNasa/MoviesNasa';
import MoviesMars from './components/MoviesMars/MoviesMars';
import TvShow from './components/TvShow/TvShow';
import Carrousel from './components/Carrousel/Carroussel';
import './reset.css';
import { SApp } from './SApp.jsx';
function App() {
  return (
    <SApp> 
      <Header />
      <Carrousel />
      <MoviesSpace />
      <TvShow />
      <MoviesNasa />
      <MoviesMars />
    </SApp>
  );
}

export default App;
