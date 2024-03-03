import './App.css';
import HeaderComponent from './Header/Header';
import BurgerComponent from './NavBurger/NavBurger';
import ProfilComponent from './Home/Home';
import ProjetComponent from './Projet/Projet';
import CertifComponent from './Certif/Certif';
import SkillsComponent from './Skills/Skills';
import ContactComponent from './Contact/Contact';
//import FullpageComponent from './Fullpage/Fullpage';


function App() {
  return (
    
    <div className=" general flex  h-full">
      <div className='  w-1/4 min-w-72 h-[100vh] z-10 sticky top-0 justify-center bg-blueM  p-5 hidden tab:block'><HeaderComponent /></div>
      <div className='  top-0 z-20 fixed rounded-lg tab:hidden'><BurgerComponent /></div>
      <div className='tab:w-3/4 w-[100vw]'>
      <section id="profil" className='section flex h-screen bg-amande p-5  '><ProfilComponent /></section>
        <section id="skills" className='section flex  bg-amande p-5   '><SkillsComponent /></section>
        <section id="projets" className='section flex  bg-amande p-5 '><ProjetComponent /></section>
        <section id="certif" className='section flex  bg-amande p-5 '><CertifComponent /></section>
        <div id="contact" className='section flex bg-amande p-5 '><ContactComponent /></div>
      </div>
      </div>
  )
}

export default App;
