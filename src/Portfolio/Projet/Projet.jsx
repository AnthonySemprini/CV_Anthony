import React, { useState, useEffect } from 'react';
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
    description: 'Blog permetant la publication, la modification et la suppression d\'articles par un admin, offre la lecture publique et le \'like\' par les utilisateurs authentifiés, construit avec Laravel, Tailwind CSS, et Vue 3.'
  },

  {
    id: 3,
    name: 'Landing Page Kucra',
    imageUrl: '/img/kucra.png',
    skills: 'https://skillicons.dev/icons?i=git,html,css,vscode',
    projectUrl: 'https://landing-page-kucra.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/exo-kucra',
    description: 'Kucra est une landing page élégante conçue en cour de ma formation chez elan formation en suivant une maquette. Ce modèle responsive s\'adapte parfaitement à tous les appareils grâce à ses feuilles de style CSS.'
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
  const [currentPage, setCurrentPage] = useState(2);
  const [projectsPerPage, setProjectsPerPage] = useState(2);

  useEffect(() => {
    // vérifie largeur de l'écran 
    const checkScreenSize = () => {
      if (window.matchMedia("(max-width: 1150px)").matches) {
        setProjectsPerPage(1); //  moins  750px larg
      } else {
        setProjectsPerPage(2); 
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const firstPageIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(firstPageIndex, firstPageIndex + projectsPerPage);

  return (
    <div>

      {/* Titre */}

      <h2 className='montserrat text-center text-blueM text-4xl font-bold my-10' >Mes différents projets</h2>

      {/* Carte projet */}

      <div className=" flex  flex-wrap justify-center gap-4 ">
        {currentProjects.map((project, index) => (
          <div key={project.id} className="custom-card-size max-w-sm rounded overflow-hidden  transition duration-300 ease-in-out">
              <h3 className="montserrat text-center text-2xl text-blueM font-bold mb-4">{project.name}</h3>
            <img className="w-full h-44 object-contain" src={project.imageUrl} alt={project.name} />
            <div align="center">
              <a href="https://skillicons.dev">
                <img className='my-2  ' src={ project.skills } />
              </a>
            </div>
            <div className="px-6 py-2">
              <p className="poppins-regular text-blueM text-justify text-base">{project.description}<br></br><strong> Pour en savoir plus ↓</strong></p>
              {project.projectUrl && (
                <a href={project.projectUrl} className="poppins-regular text-blue-500 hover:text-blueM inline-block mt-4" target="_blank" rel="noopener noreferrer">Tester le projet</a>
              )}
              <br></br><a href={project.githubUrl} className="poppins-regular text-blue-500 hover:text-blueM inline-block mt-2" target="_blank" rel="noopener noreferrer">Consulter le repository GitHub</a>
            </div>
          </div>
        ))}
      </div>

      {/* Btn Prec & Suiv */}

      <div className="flex items-center justify-center space-x-2">
  <button
    className="poppins-regular px-4 py-2 rounded bg-blueM text-amande hover:bg-amande hover:text-blueM border-2 border-blueM hover:border-2 hover:border-blueM transition duration-300"
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
    disabled={currentPage === 0}
  >
  <i class="fa-solid fa-arrow-left"></i>
  </button>
  
  {/* Cercles représentant les pages */}
  {Array.from({ length: pageCount }, (_, index) => (
    <div
      key={index}
      className={`h-4 w-4 rounded-full ${currentPage === index ? 'bg-amande border border-blueM' : 'bg-blueM'} transition duration-300`}
    ></div>
  ))}
  
  <button
    className="poppins-regular px-4 py-2 rounded bg-blueM text-amande hover:bg-amande hover:text-blueM border-2 border-blueM hover:border-2 hover:border-blueM transition duration-300"
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))}
    disabled={currentPage === pageCount - 1}
  >
  <i class="fa-solid fa-arrow-right"></i>
  </button>
</div>
    </div>
  );
};

export default ProjetComponent;