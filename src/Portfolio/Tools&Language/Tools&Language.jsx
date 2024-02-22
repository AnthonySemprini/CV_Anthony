import React, { useState }  from 'react';

const ToolsList = () => {
  const Tools = [
    'VsCode',
    'GitHub',
    'Mamp',
    'Laragon',
  ];
  return Tools;
};

const LanguagesList = () => {
  const Languages = [
    'Html',
    'Css',
    'JavaScript',
    'Php',
    'Sql'
  ];
  return Languages;
};

const FrameworksList = () => {
  const Frameworks = [
    'Symfony',
    'Bootstrap'
  ];
  return Frameworks;
};

const LibrairiesList = () => {
  const Librairies = [
    'React.js',
    'Moment.js'
  ];
  return Librairies
};

function Stack(props) {
  const Langages = LanguagesList();
  const Frameworks = FrameworksList();
  const Librairies = LibrairiesList();
  const Outils = ToolsList();

  const [isLangagesClicked, setIsLangagesClicked] = useState(false);

  const handleLangagesClick = () => {
    setIsLangagesClicked(!isLangagesClicked);
  };
  const [isOutilsClicked, setIsOutilsClicked] = useState(false);

  const handleOutilsClick = () => {
    setIsOutilsClicked(!isOutilsClicked);
  };
  const [isFrameworksClicked, setIsFrameworksClicked] = useState(false);

  const handleFrameworksClick = () => {
    setIsFrameworksClicked(!isFrameworksClicked);
  };
  const [isLibrairiesClicked, setIsLibrairiesClicked] = useState(false);

  const handleLibrairiesClick = () => {
    setIsLibrairiesClicked(!isLibrairiesClicked);
  };

  return (
    <div className="grid grid-rows-3 grid-flow-col ">
      <div className='row-span-1 col-span-2 flex justify-center ' >
      <h1 className='text-center text-3xl' >Langages & Outils</h1>
      </div>
    
      
             
      <div className={`w-1/2 h-80 row-span-1 col-span-1 bg-sky-500 p-3 evenly rounded-md m-5 ${isLangagesClicked ? 'clicked' : ''}`} onClick={handleLangagesClick}>
        <h3 className='text-center text-2xl'>Langages:</h3>
        {isLangagesClicked ? (
          <ul>
            {Langages.map((langage, index) => (
              <li className='text-center' key={index}>{langage}</li>
              ))}
          </ul>
        ) : (
          <p className='text-center pt-5'>Click ici</p>
        )}
      </div>
      <div className={`w-1/2 h-80 row-span-1 col-span-1 bg-sky-500 p-3 evenly rounded-md m-5 ${isOutilsClicked ? 'clicked' : ''}`} onClick={handleOutilsClick}>
        <h3 className='text-center text-2xl'>Outils:</h3>
        {isOutilsClicked ? (
          <ul>
            {Outils.map((outil, index) => (
              <li className='text-center' key={index}>{outil}</li>
              ))}
          </ul>
        ) : (
          <p className='text-center pt-5'>Click ici</p>
        )}
      </div>
      <div className={`w-1/2 h-80 row-span-1 col-span-1 bg-sky-500 p-3 evenly rounded-md m-5 ${isFrameworksClicked ? 'clicked' : ''}`} onClick={handleFrameworksClick}>
        <h3 className='text-center text-2xl'>Frameworks:</h3>
        {isFrameworksClicked ? (
          <ul>
            {Frameworks.map((framework, index) => (
              <li className='text-center' key={index}>{framework}</li>
              ))}
          </ul>
        ) : (
          <p className='text-center pt-5'>Click ici</p>
        )}
      </div>
      <div className={`w-1/2 h-80 row-span-1 col-span-1 bg-sky-500 p-3 evenly rounded-md m-5 ${isLibrairiesClicked ? 'clicked' : ''}`} onClick={handleLibrairiesClick}>
        <h3 className='text-center text-2xl'>Librairies:</h3>
        {isLibrairiesClicked ? (
          <ul>
            {Librairies.map((librairie, index) => (
              <li className='text-center' key={index}>{librairie}</li>
              ))}
          </ul>
        ) : (
          <p className='text-center pt-5'>Click ici</p>
        )}
      </div>
          
      </div>
  

  );
};

export default Stack;