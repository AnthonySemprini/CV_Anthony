import React from 'react';

// Supposons que vous ayez un tableau d'objets représentant vos projets
const projects = [
  {
    id: 1,
    name: 'Landing Page Kucra',
    imageUrl: '/img/kucra.png',
    projectUrl: 'https://landing-page-kucra.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/exo-kucra',
    description: 'Kucra est une landing page élégante et moderne conçue en cour de ma formation chez elan formation en suivant une maquette. Ce modèle responsive s\'adapte parfaitement à tous les appareils grâce à ses feuilles de style CSS spécifiques.'
  },
  {
    id: 2,
    name: 'Session App',
    imageUrl: '/img/session.png',
    projectUrl: '',
    githubUrl: 'https://github.com/AnthonySemprini/SessionApp',
    description: 'Ce projet a pour but de développer une application permettant de gérer des sessions de formation et les inscriptions des stagiaires. Chaque session est limitée en nombre de places et possède des dates de début et de fin précises. L\'application offre une vue en temps réel sur le nombre de places restantes et gère un catalogue de modules de formation classés par catégorie.'
  },
  
];

const Projet = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-5">
      {projects.map((project) => (
        <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={project.imageUrl} alt={project.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.name}</div>
            <p>{project.description}</p>
            <a href={project.projectUrl} className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Voir le projet</a><br></br>
            <a href={project.githubUrl} className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Voir repository github</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projet;
