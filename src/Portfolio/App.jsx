import './App.css';
import HeaderComponent from './Header/Header';
import MyButtonComponent from './CvButton/CvButton';
import ProfilComponent from './Home/Home';
import ProjetComponent from './Projet/Projet';
import SkillsComponent from './Skills/Skills';

function App() {
  return (
    
    <div className=" general flex  h-full bg-orangeRouge">
      <div className='  w-1/4 h-[99vh] sticky top-1 flex justify-center bg-blueM m-1 p-5 rounded-lg'><HeaderComponent /></div>
      <div className='w-3/4'>
        <div className='flex h-[99vh] bg-amande  ml-0 mt-1 mr-1 mb-1 p-5 rounded-lg  '><ProfilComponent /></div>
        <div className='flex justify-center bg-amande  ml-0 mt-1 mr-1 mb-1 p-5 rounded-lg  '><SkillsComponent /></div>
        <div className='flex justify-center bg-amande  ml-0 mt-1 mr-1 mb-1 p-5 rounded-lg'><ProjetComponent /></div>
    </div>
  </div>
  )
}

export default App;
