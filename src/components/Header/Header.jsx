import SHeader from './Style.jsx';

export default function Header() {
  return (
    <SHeader>
      <img src='/img/header/logoRouge.png' alt='logo' />
      <div className='navbar'>
        <ul className='categories'>
          <li className='movies'>MOVIES</li>
          <li className='series'>SERIES</li>
          <li className='documentaries'>DOCUMENTARIES</li>
        </ul>
      </div>
      <button className='button' type='button'>
        <img src='/img/header/planetemars.png' alt='planet-mars' />
        <p>MARS MODE</p>
      </button>
    </SHeader>
  );
}
