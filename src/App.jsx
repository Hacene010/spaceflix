import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MoviesSpace from './components/MoviesSpace/MoviesSpace';
import MoviesNasa from './components/MoviesNasa/MoviesNasa';
import MoviesMars from './components/MoviesMars/MoviesMars';
import TvShow from './components/TvShow/TvShow';
import Carrousel from './components/Carrousel/Carroussel';
import MoviesDetails from './components/MoviesDetails';
import './reset.css';
import { SApp } from './SApp.jsx';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <SApp>
          <Header />
          <Route exact path='/'>
            <Carrousel />
            <MoviesSpace />
            <TvShow />
            <MoviesNasa />
            <MoviesMars />
          </Route>
          <Route path='/:id'>
            <MoviesDetails />
          </Route>
        </SApp>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
