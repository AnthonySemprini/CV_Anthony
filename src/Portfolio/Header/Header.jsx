import React from 'react';
import './Header.css';
import MyButton from '../CvButton/CvButton';

function Header() {
  return (
    <header className='p-5 '>
      <nav >
        <ul className='flex flex-col items-center justify-center gap-5 '>
          <img className='rounded-3xl' src="./img/photo.jpg" />
          <li>Profil</li>
          <li>Langages & Outils</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
          <div className='mt-5 flex justify-evenly'>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-envelope"></i>
          </div>
      </nav>
    </header>
  );
}
export default Header;