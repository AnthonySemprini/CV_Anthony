import React from 'react';
import MyButton from '../CvButton/CvButton';

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

function Profil() {
  return (
    <>
      <div className=''>
        <h1 className='text-3xl text-center p-5'>Bienvenue sur mon portfolio</h1>
        <h2 className='text-center text-2xl p-5'>{user.name}</h2>
        <p className='mx-5'>{user.description}</p>
      </div>
      <h3 className='mt-5 flex justify-center '> <MyButton /></h3>
    </>
  );
}

export default Profil;