import './App.css';
import Header from './Header/Header';
import MyButton from './CvButton/CvButton';
import Profil from './Home/Home';
import Projet from './Projet/Projet';
import Stack from './Tools&Language/Tools&Language';

function App() {
  return (
    
    <div className=" general flex  h-full bg-orangeRouge">
      <div className='  w-1/4 h-[99vh] sticky top-1 flex justify-center bg-blueM m-1 p-5 rounded-lg'><Header /></div>
      <div className='w-3/4'>
        <div className='flex h-[99vh] bg-amande  ml-0 mt-1 mr-1 mb-1 p-5 rounded-lg  '><Profil /></div>
        <div className='flex justify-center bg-amande  ml-0 mt-1 mr-1 mb-1 p-5 rounded-lg'><Projet /></div>
        <div className='flex h-[99vh] bg-amande  ml-0 mt-1 mr-1 mb-1 p-5 rounded-lg  '><Stack /></div>
    </div>
  </div>
  )
}

export default App;
