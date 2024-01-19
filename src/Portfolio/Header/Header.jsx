import React from 'react';
import './Header.css';


function Header() {
  return (
    <header>
      <nav>
        <ul className='flex flex-col items-center justify-center gap-y-5 pt-5'>
          <img className='rounded-3xl min-w-24 max-w-48 p-5' src="./img/photo.jpg" />
          <li>Profil</li>
          <li>Langages & Outils</li>
          <li>Projets</li>
          <li>Contact</li>
          <li>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-envelope"></i>
          </li>
          {/* <li> <MyButton /></li> */}
        </ul>
      </nav>
    </header>
  );
}
export default Header;