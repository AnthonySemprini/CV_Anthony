import React, { useState, useEffect } from 'react';
import MyButtonComponent from '../CvButton/CvButton';
import TypewriterText from '../Writer/Writer';

const user = {
  name: 'Anthony SEMPRINI',
  description: 'Bonjour à tous, Je m\'appelle Anthony, un passionné de la programmation fraîchement sorti de l\'école. Mon parcours académique m\'a permis de développer une expertise solide dans le domaine du développement web, et je suis ravi de partager mes compétences avec vous. ',
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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 0); // Commence après 0 seconde
    const timer2 = setTimeout(() => setShowSecond(true), 1600); // Puis 1,6 secondes après le premier
    const timer3 = setTimeout(() => setShowThird(true), 3500); // Puis 1,6 secondes après le deuxième

    setTimeout(() => {
      setShowButton(true);
    }, 12550);


    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <div className='flex flex-col justify-center'>
       
        {showFirst && <TypewriterText text={user.name} speed={100}
          style={{ color: 'rgb(30 61 89)', fontSize: '80px' }} />}

        {showSecond && <TypewriterText text="Développeur Web" speed={100}
          style={{ color: 'rgb(30 61 89)', fontSize: '50px' }} />}

        {showThird && <TypewriterText text={user.description} speed={30}
          style={{ color: 'rgb(30 61 89)', fontSize: '20px', textAlign:'justify' }} />}

        {showButton && (
          <div className='m-20 bg-mangue border-4 border-orangeRouge p-3 rounded-xl text-blueM font-bold text-center'>
            <MyButtonComponent />
          </div>
        )}
      </div>
    </>
  );
}

export default ProfilComponent;