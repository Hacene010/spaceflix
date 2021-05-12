import { Link } from 'react-router-dom';
import SHeader from './Style.jsx';

export default function Header({ theme, setTheme }) {
  const changeTheme = () => {
    theme === 'earth' ? setTheme('mars') : setTheme('earth');
  };
  return (
    <SHeader>
      {theme === 'earth' ? (
        <Link to='/'>
          <img src='/img/header/logoRouge.png' alt='logo' />
        </Link>
      ) : (
        <img src='/img/header/logoNoir.png' alt='logo' />
      )}
      <div className='navbar'>
        <ul className='categories'>
          <a href='#MoviesNasa'>
            <li className='movies'>MOVIES</li>
          </a>
          <a href='#TvShow'>
            <li className='series'>SERIES</li>
          </a>
          <a href='#Documentary'>
            {' '}
            <li className='documentaries'>DOCUMENTARIES</li>
          </a>
        </ul>
      </div>
      <button className='button' type='button' onClick={changeTheme}>
        {theme === 'earth' ? (
          <>
            <img
              className='planete'
              src='/img/header/planetemars.png'
              alt='planet-mars'
            />
            <p className='mars-mode'>Mars Mode</p>
          </>
        ) : (
          <>
            <img
              className='barre'
              src='/img/header/barreMars.png'
              alt='barre'
            />
            <p className='earth-mode'>Earth Mode</p>
          </>
        )}
      </button>
    </SHeader>
  );
}
