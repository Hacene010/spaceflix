import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import DocumentarySpace from './components/DocumentarySpace/DocumentarySpace';
import MoviesSpace from './components/MoviesSpace/MoviesSpace';
import MoviesNasa from './components/MoviesNasa/MoviesNasa';
import MoviesMars from './components/MoviesMars/MoviesMars';
import TvShow from './components/TvShow/TvShow';
import Carrousel from './components/Carrousel/Carroussel';
import MoviesDetails from './components/MovieDetails/MoviesDetails';
import MoviesDetailsTv from './components/MovieDetails/MoviesDetailsTv';
import './reset.css';
import { SApp } from './SApp.jsx';
import { GlobalStyles, EarthTheme, MarsTheme } from './components/GlobalStyles';

const themes = {
  earth: EarthTheme,
  mars: MarsTheme,
};
function App() {
  const [theme, setTheme] = useState('earth');
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={themes[theme]}>
          <SApp>
            <GlobalStyles />
            <Header theme={theme} setTheme={setTheme} />
            <Route exact path='/'>
              <Carrousel theme={theme} />
              <MoviesSpace />
              <MoviesNasa />
              <MoviesMars />
              <DocumentarySpace />
              <TvShow />
            </Route>
            <Route path='/movies/:id'>
              <MoviesDetails />
            </Route>
            <Route path='/tvshow/:id'>
              <MoviesDetailsTv />
            </Route>
          </SApp>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
