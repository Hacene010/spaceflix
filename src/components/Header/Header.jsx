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
        <Link to='/'>
          <img src='/img/header/logoNoir.png' alt='logo' />
        </Link>
      )}
      <div className='navbar'>
        <ul className='categories'>
          <li className='movies'>MOVIES</li>
          <li className='series'>SERIES</li>
          <li className='documentaries'>DOCUMENTARIES</li>
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
