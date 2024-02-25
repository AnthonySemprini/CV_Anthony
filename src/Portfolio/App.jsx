import './App.css';
import HeaderComponent from './Header/Header';
import BurgerComponent from './NavBurger/NavBurger';
import MyButtonComponent from './CvButton/CvButton';
import ProfilComponent from './Home/Home';
import ProjetComponent from './Projet/Projet';

import SkillsComponent from './Skills/Skills';

function App() {
  return (
    
    <div className=" general flex  h-full bg-orangeRouge">
      <div className='  w-1/4 min-w-72 h-[99vh] sticky top-1  justify-center bg-blueM m-1 p-5 rounded-lg hidden tab:block'><HeaderComponent /></div>
      <div className='tab:w-3/4 w-[100vw]'>
      <div className='z-40   sticky  rounded-lg tab:hidden'><BurgerComponent /></div>
        <div id="profil" className='flex h-[99vh] bg-amande   m-1 p-5 rounded-lg  '><ProfilComponent /></div>
        <div id="skills" className='flex justify-center bg-amande  m-1 p-5 rounded-lg  '><SkillsComponent /></div>
        <div id="projets" className='flex justify-center bg-amande  m-1 p-5 rounded-lg'><ProjetComponent /></div>
        {/* <div id="certif" className='flex justify-center bg-amande  m-1 p-5 rounded-lg'><CertifComponent /></div> */}
        {/* <div id="contact" className='flex justify-center bg-amande  m-1 p-5 rounded-lg'><ContactComponent /></div> */}
    </div>
  </div>
  )
}

export default App;
