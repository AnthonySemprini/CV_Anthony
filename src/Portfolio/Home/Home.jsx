import React from 'react';

const user = {
    name: 'Anthony SEMPRINI',
    description: 'Bonjour à tous, Je m\'appelle Anthony, un passionné de la programmation fraîchement sorti de l\'école. Mon parcours académique m\'a permis de développer une expertise solide dans le domaine du développement web, et je suis ravi de partager mes compétences avec vous. Je suis spécialisé dans les langages fondamentaux du web tels que HTML, CSS, PHP et JavaScript, ce qui me permet de créer des interfaces utilisateur dynamiques et attrayantes. Maîtrisant également le framework Symfony, j\'ai acquis une compréhension approfondie des bonnes pratiques de développement back-end. Actuellement, je me lance dans l\'apprentissage de React, un choix motivé par le désir de créer des applications web modernes et réactives. Je trouve fascinant le potentiel de React pour construire des interfaces utilisateur interactives et conviviales, et je suis enthousiaste à l\'idée d\'approfondir mes compétences dans ce domaine.Par ailleurs, je découvre également Tailwind CSS, un outil qui simplifie le développement frontend en facilitant la création de designs élégants et responsifs. Cette nouvelle corde à mon arc contribue à affiner mes compétences et à rester à jour dans un domaine en constante évolution. Je suis ouvert aux collaborations et prêt à relever de nouveaux défis passionnants. Mon objectif est de contribuer de manière significative au monde du développement web tout en continuant à me perfectionner et à élargir mes horizons. N\'hésitez pas à me contacter si vous avez des projets intéressants ou des opportunités de collaboration. Je suis impatient de contribuer à des projets innovants et de grandir professionnellement dans cette passionnante communauté de développement web. Merci de prendre le temps de découvrir mon profil, et au plaisir de discuter avec vous !',


    

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
      <h1 className='text-3xl text-center p-5'>Bienvenue sur mon portfolio</h1>
      <h2 className='text-center text-2xl p-5'>{user.name}</h2>
      <p className='mx-5'>{user.description}</p>
      
    </>
    );
  }

  export default Profil;