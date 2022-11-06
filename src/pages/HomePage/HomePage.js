import React from 'react';
import './HomePage.css';
import { BsGithub, BsSlack } from 'react-icons/bs';
import { profile } from '../../assets/images';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

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
        <button className='button'>
          <Link to='/contact' className='contact__button' id='contact'>
            Contact
          </Link>
        </button>
      </main>

      <div className='icon__buttons'>
        <BsSlack />
        <BsGithub />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
