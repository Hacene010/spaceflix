import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import MoviesSpace from './components/MoviesSpace/MoviesSpace';
import MoviesNasa from './components/MoviesNasa/MoviesNasa';
import MoviesMars from './components/MoviesMars/MoviesMars';
import TvShow from './components/TvShow/TvShow';
import Carrousel from './components/Carrousel/Carroussel';
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
    <ThemeProvider theme={themes[theme]}>
      <SApp>
        <GlobalStyles />
        <Header theme={theme} setTheme={setTheme} />
        <Carrousel />
        <MoviesSpace />
        <TvShow />
        <MoviesNasa />
        <MoviesMars />
      </SApp>
    </ThemeProvider>
  );
}

export default App;
