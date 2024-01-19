import './App.css';
import Header from './Header/Header';
import MyButton from './CvButton/CvButton';
import Profil from './Home/Home';
import Stack from './Tools&Language/Tools&Language';

function App() {
  return (
    <div className=" general grid grid-rows-2 grid-flow-col gap-5">
    <div className='row-span-4 col-span-1 flex justify-center bg-sky-500 '><Header /></div>
    <div className='row-span-1 col-span-1 '><Profil /></div>
    <div className='row-span-1 col-span-1  '><Stack /></div>
    <div className='row-span-1 col-span-1'><MyButton /></div>
  </div>
);
}

export default App
