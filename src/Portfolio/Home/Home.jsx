import React, { useState, useEffect } from 'react';
import MyButtonComponent from '../CvButton/CvButton';
import TypewriterText from '../Writer/Writer';
import './Home.css';


const user = {
  name: 'Anthony SEMPRINI',
  job: 'Développeur Web',
  description1: 'Bonjour à tous', 
  description2:'Mon parcours m\'a doté d\'une expérience solide en développement web, avec une prédilection pour le PHP. J\'ai acquis une maîtrise approfondie des frameworks Symfony et Laravel, qui me permettent de construire des applications robustes et évolutives.',
  description3:'Côté front-end, je suis compétent en JavaScript, CSS et j\'utilise avec aisance des frameworks tels que Tailwind et Bootstrap, pour créer des interfaces utilisateur attractives et réactives.',
  description4:' Récemment, mon intérêt s\'est porté sur React, un outil puissant qui m\'a permis de développer ce portfolio.',
  adresse: '53 rue de la charmille',
  cp: '67200',
  ville: 'STRASBOURG',
  tel: '0606650392',
  mail: 'semprini.anthony@gmail.com',
  github: 'https://github.com/AnthonySemprini',
  linkedin: 'https://www.linkedin.com/in/anthony-semprini-5a4066145/',
  img: './img/photo.jpg'
};


function ProfilComponent() {
  
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false); 
  const [showFor, setShowFor] = useState(false); 
  const [showFive, setShowFive] = useState(false); 
  const [showSix, setShowSix] = useState(false); 
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 0); // Commence après 0 seconde
    const timer2 = setTimeout(() => setShowSecond(true), 1600); // Puis 1,6 secondes après le premier
    const timer3 = setTimeout(() => setShowThird(true), 3500); // Puis 1,6 secondes après le deuxième
    const timer4 = setTimeout(() => setShowFor(true), 4300); // Puis 1,6 secondes après le deuxième
    const timer5 = setTimeout(() => setShowFive(true), 13000); // Puis 1,6 secondes après le deuxième
    const timer6 = setTimeout(() => setShowSix(true), 20000); // Puis 1,6 secondes après le deuxième

    setTimeout(() => {
      setShowButton(true);
    }, 24000);


    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);



  return (
    <>
      <div className='flex flex-col justify-center'>
       
        {showFirst && <TypewriterText text={user.name} speed={100} 
          className="montserrat text-blueM lg:text-6xl text-3xl mb-3"  />}
    
        {showSecond && <TypewriterText text={user.job} speed={100}
          className="montserrat text-blueM lg:text-5xl text-2xl mb-6" />}

        {showThird && <TypewriterText text={user.description1} speed={30}
          className="poppins-regular text-blueM text-justify text-base"   />}

        {showFor && <TypewriterText text={user.description2} speed={30}
          className="poppins-regular text-blueM text-justify text-base"   />}

        {showFive && <TypewriterText text={user.description3} speed={30}
          className="poppins-regular text-blueM text-justify text-base"   />}

        {showSix && <TypewriterText text={user.description4} speed={30}
          className="poppins-regular text-blueM text-justify text-base"   />}

        {showButton && (
          <div className='m-10 poppins-regular px-4 py-2 rounded bg-blueM text-amande hover:bg-amande hover:text-blueM border-2 border-blueM hover:border-2 hover:border-blueM transition duration-300 text-center'>
       
            <MyButtonComponent />
          </div>
        )}
      </div>
    </>
  );
}

export default ProfilComponent;