import './App.css';
import Header from './Header/Header';
import MyButton from './CvButton/CvButton';
import Profil from './Home/Home';
import Stack from './Tools&Language/Tools&Language';

function App() {
  return (
  
  <div className=" general flex h-full bg-orangeRouge">
    <div className='  w-1/4 h-[99vh] flex justify-center bg-blueM m-1 p-5 rounded-lg'><Header /></div>
    {/* <div className='flex  w-3/4 h-[99vh] bg-amande  ml-0 mt-1 mr-1 mb-1 p-5 rounded-lg'><Profil /></div> */}
    <div className='flex  w-3/4 h-[99vh] bg-amande  ml-0 mt-1 mr-1 mb-1 p-5 rounded-lg  '><Stack /></div>
    
  </div>
);
}

export default App;
