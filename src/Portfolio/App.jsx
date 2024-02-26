import './App.css';
import HeaderComponent from './Header/Header';
import BurgerComponent from './NavBurger/NavBurger';

import FullpageComponent from './Fullpage/Fullpage';

function App() {
  return (
    
    <div className=" general flex  h-full">
      <div className='  w-1/4 min-w-72 h-[100vh] sticky top-0 justify-center bg-blueM  p-5 hidden tab:block'><HeaderComponent /></div>
      <div className='tab:w-3/4 w-[100vw]'>
      <div className=' fixed  rounded-lg tab:hidden'><BurgerComponent /></div>
        <div><FullpageComponent /></div>
      </div>
      </div>
  )
}

export default App;
