import React from 'react';
import profile from '../components/profile.png';
import zuri from '../components/zuri.png';
import I4G from '../components/I4G.png';
import { BsGithub, BsSlack } from 'react-icons/bs';

import './HomePage.css';

function HomePage() {
  return (
    <div className='container'>
      <div className='profile'>
        <img src={profile} alt='profile' id='profile__img' />
        <p id='twitter'>dreicode</p>
        <p className='slack__name' id='slack'>
          dreiOX
        </p>
      </div>

      <main>
        <a href='https://twitter.com/dreicode'>
          <button className='button'>Twitter Link</button>
        </a>
        <a href='https://training.zuri.team' id='btn__zuri' className='bg-ash'>
          <button className='button'>Zuri Team</button>
        </a>
        <a href=' http://books.zuri.team' id='books'>
          <button className='button'>Zuri Books</button>
        </a>
        <a
          href='https://books.zuri.team/python-for-beginners?ref_id=dreiOX'
          id='book__python'
        >
          <button className='button'>Python Books</button>
        </a>
        <a href='https://background.zuri.team' id='pitch'>
          <button className='button'>Background Check for Coders</button>
        </a>
        <a href='https://books.zuri.team/design-rules' id='book__design'>
          <button className='button'>Design Books</button>
        </a>
      </main>

      <div className='icon__buttons'>
        <BsSlack />
        <BsGithub />
      </div>

      <footer className='footer'>
        <img src={zuri} alt='zuri' />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt='ingressive for good' />
      </footer>
    </div>
  );
}

export default HomePage;
