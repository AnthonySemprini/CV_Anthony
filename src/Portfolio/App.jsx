import './App.css';
import Header from './Header/Header';
import MyButton from './CvButton/CvButton';
import Profil from './Home/Home';
import Stack from './Tools&Language/Tools&Language';

function App() {
  return (
    <div className=" general flex h-full">
    <div className='  w-1/4 h-[100vh] flex justify-center bg-blueM m-3 p-5 rounded-lg'><Header /></div>
    <div className=' w-3/4 h-[100vh] bg-amande  m-3 p-5 rounded-lg'><Profil /></div>
    {/* <div className='row-span-1 col-span-1  '><Stack /></div> */}
    {/* <div className='row-span-1 col-span-1'><MyButton /></div> */}
  </div>
);
}""

export default App
