import React from 'react';
import MyButtonComponent from '../CvButton/CvButton';

const user = {
  name: 'Anthony SEMPRINI',
  description: 'Bonjour à tous, Je m\'appelle Anthony, un passionné de la programmation fraîchement sorti de l\'école. Mon parcours académique m\'a permis de développer une expertise solide dans le domaine du développement web, et je suis ravi de partager mes compétences avec vous. Je suis spécialisé dans les langages fondamentaux du web tels que HTML, CSS, PHP et JavaScript, ce qui me permet de créer des interfaces utilisateur dynamiques et attrayantes. Maîtrisant également le framework Symfony, j\'ai acquis une compréhension approfondie des bonnes pratiques de développement back-end. Actuellement, je me lance dans l\'apprentissage de React, un choix motivé par le désir de créer des applications web modernes et réactives. ',




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
  return (
    <>
      <div className='flex flex-col justify-center'>
        <h1 className='text-center text-blueM text-5xl p-5'>{user.name}</h1>
        <h2 className='text-4xl text-blueM  p-5'>Dévellopeur Web</h2>
        <p className='mx-5 text-xl text-blueM text-justify'>{user.description}</p>
      <button className='mx-20 mt-20 bg-mangue border-4 border-orangeRouge  p-3 rounded-xl text-blueM font-bold'> <MyButtonComponent /></button>
      </div>
    </>
  );
}

export default ProfilComponent;