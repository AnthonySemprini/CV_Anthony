import React, { useState } from 'react';
import './Projet.css';


const projects = [

  {
    id: 1,
    name: 'BarberShop',
    imageUrl: '/img/barber.png',
    skills: 'https://skillicons.dev/icons?i=git,php,symfony,js,css,mysql',
    projectUrl: '',
    githubUrl: 'https://github.com/AnthonySemprini/barber',
    description: 'Bienvenue dans mon projet de création d\'un site de réservation en ligne et click & collect pour coiffeurs-barbiers, simplifiant la gestion des rendez-vous et la vente de produits.'
  },

  {
    id: 2,
    name: 'Blog Laravel',
    imageUrl: '/img/blog.png',
    skills: 'https://skillicons.dev/icons?i=git,php,laravel,js,vue,tailwind',
    projectUrl: '',
    githubUrl: 'https://github.com/AnthonySemprini/MyFirstLaravelProjectBlog',
    description: 'MyFirstLaravelProjectBlog est un système de gestion de blog qui permet la publication, la modification et la suppression d\'articles par un admin, offre la lecture publique et le \'like\' par les utilisateurs authentifiés, construit avec Laravel, Tailwind CSS, et Vue 3.'
  },

  {
    id: 3,
    name: 'Landing Page Kucra',
    imageUrl: '/img/kucra.png',
    skills: 'https://skillicons.dev/icons?i=git,html,css,vscode',
    projectUrl: 'https://landing-page-kucra.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/exo-kucra',
    description: 'Kucra est une landing page élégante et moderne conçue en cour de ma formation chez elan formation en suivant une maquette. Ce modèle responsive s\'adapte parfaitement à tous les appareils grâce à ses feuilles de style CSS spécifiques.'
  },

  {
    id: 4,
    name: 'Session App',
    imageUrl: '/img/session.png',
    skills: 'https://skillicons.dev/icons?i=git,php,symfony,bootstrap,mysql',
    projectUrl: '',
    githubUrl: 'https://github.com/AnthonySemprini/SessionApp',
    description: 'Ce projet vise à créer une application pour gérer les sessions de formation et les inscriptions, offrant un suivi en temps réel des places disponibles et un catalogue de modules par catégorie.'
  },

  {
    id: 5,
    name: 'Pierre feuille ciseaux',
    imageUrl: '/img/pierre-feuille-ciseaux.png',
    skills: 'https://skillicons.dev/icons?i=git,html,css,js,vscode',
    projectUrl: 'https://pierre-papier-ciseaux-le-jeu.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/pierre-feuille-ciseaux',
    description: 'Ce projet est une implémentation web simple du jeu classique Pierre-Feuille-Ciseaux, permettant à un joueur d\'affronter l\'ordinateur.'
  },

  {
    id: 6,
    name: 'Run sausage run',
    imageUrl: '/img/run-sausage.png',
    skills: 'https://skillicons.dev/icons?i=git,html,css,js,vscode',
    projectUrl: 'https://run-sausage.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/Run-sausage-RunJS',
    description: 'Bienvenue dans \'Run SAUSAGE Run!!!\', un jeu captivant où vous guidez une saucisse à esquiver des obstacles, créé avec HTML, CSS et JavaScript pour une expérience fluide dans votre navigateur.'
  },

  {
    id: 7,
    name: 'Tic-Tac-Toe',
    imageUrl: '/img/tic-tac-toe.png',
    skills: 'https://skillicons.dev/icons?i=git,html,css,js,vscode',
    projectUrl: 'https://morpions-js.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/Tic-Tac-Toe',
    description: 'Le Morpion est un jeu stratégique pour deux joueurs qui alternent pour placer \'X\' et \'O\' dans une grille de 3x3, visant à aligner trois symboles identiques pour gagner, avec match nul si la grille est pleine sans alignement.'
  },

  {
    id: 8,
    name: 'Social icons',
    imageUrl: '/img/social.png',
    skills: 'https://skillicons.dev/icons?i=git,html,css,vscode',
    projectUrl: 'https://social-icons-css.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/exoSocial_Icons/tree/master',
    description: 'Le projet \'Social Icons\' offre une série d\'icônes interactives pour les réseaux sociaux, enrichissant l\'interface utilisateur par des effets visuels au survol qui révèlent le nom de chaque réseau.'
  },

];


const ProjetComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;

  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const firstPageIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(firstPageIndex, firstPageIndex + projectsPerPage);

  return (
    <div>

      {/* Titre */}

      <h2 className='text-center text-3xl' >Mes différents projets</h2>

      {/* Carte projet */}

      <div className=" flex  flex-wrap justify-center gap-4 p-5">
        {currentProjects.map((project, index) => (
          <div key={project.id} className="custom-card-size max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out">
            {/* <span className="text-center text-lg font-semibold block p-2"># {firstPageIndex + index + 1} #</span> */}
              <h2 className="font-bold text-center text-xl m-2">{project.name}</h2>
            <img className="w-full h-48 object-contain" src={project.imageUrl} alt={project.name} />
            <div align="center">
              <a href="https://skillicons.dev">
                <img className='my-2' src={ project.skills } />
              </a>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{project.description}<br></br><br></br><strong> Pour en savoir plus ↓</strong></p>
              {project.projectUrl && (
                <a href={project.projectUrl} className="text-blue-500 hover:text-blue-800 inline-block mt-4" target="_blank" rel="noopener noreferrer">Tester le projet</a>
              )}
              <br></br><a href={project.githubUrl} className="text-blue-500 hover:text-blue-800 inline-block mt-2" target="_blank" rel="noopener noreferrer">Consulter le repository GitHub</a>
            </div>
          </div>
        ))}
      </div>

      {/* Btn Prec & Suiv */}

      <div className="flex justify-center gap-4 mt-4">
        <button
          className="px-4 py-2 rounded bg-blueM text-amande hover:bg-amande hover:text-blueM border-2 border-blueM hover:border-2 hover:border-blueM transition duration-300"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Précédent
        </button>
        <span>{currentPage + 1} / {pageCount}</span>
        <button
          className="px-4 py-2 rounded bg-blueM text-amande hover:bg-amande hover:text-blueM border-2 border-blueM hover:border-2 hover:border-blueM transition duration-300"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))}
          disabled={currentPage === pageCount - 1}
        >
          Suivant
        </button>
      </div>

    </div>
  );
};

export default ProjetComponent;