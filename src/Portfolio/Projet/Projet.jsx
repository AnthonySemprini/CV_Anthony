import React, { useState } from 'react';
import './Projet.css';


const projects = [

  {
    id: 1,
    name: 'BarberShop',
    imageUrl: '/img/barber.png',
    projectUrl: '',
    githubUrl: 'https://github.com/AnthonySemprini/barber',
    description: 'Bienvenue dans mon projet de création d\'un site de réservation en ligne et click & collect pour coiffeurs-barbiers, visant à simplifier la gestion des rendez-vous et la vente de produits avec une interface intuitive. Ce site permet aux clients de réserver facilement leur créneau et d\'acheter des produits en click & collect, tandis que les professionnels bénéficient d\'outils de gestion des rendez-vous et des produits. Le site est développé avec PHP (Symfony), JavaScript, HTML, CSS, et utilise une base de données MySQL.'
  },
  
  {
    id: 2,
    name: 'Blog Laravel',
    imageUrl: '/img/blog.png',
    projectUrl: '',
    githubUrl: 'https://github.com/AnthonySemprini/MyFirstLaravelProjectBlog',
    description: 'Le jeu de Morpion se joue sur une grille de 3x3 cases. Deux joueurs s\'affrontent et marquent à tour de rôle les cases de la grille avec leur symbole respectif, "X" pour le Joueur 1 et "O" pour le Joueur 2. Le gagnant est le premier joueur à aligner trois de ses symboles horizontalement, verticalement ou diagonalement. Si la grille est complètement remplie sans qu\'aucun joueur n\'ait aligné trois symboles, la partie est déclarée nulle.'
  },

  {
    id: 3,
    name: 'Landing Page Kucra',
    imageUrl: '/img/kucra.png',
    projectUrl: 'https://landing-page-kucra.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/exo-kucra',
    description: 'Kucra est une landing page élégante et moderne conçue en cour de ma formation chez elan formation en suivant une maquette. Ce modèle responsive s\'adapte parfaitement à tous les appareils grâce à ses feuilles de style CSS spécifiques.'
  },

  {
    id: 4,
    name: 'Session App',
    imageUrl: '/img/session.png',
    projectUrl: '',
    githubUrl: 'https://github.com/AnthonySemprini/SessionApp',
    description: 'Ce projet a pour but de développer une application permettant de gérer des sessions de formation et les inscriptions des stagiaires. Chaque session est limitée en nombre de places et possède des dates de début et de fin précises. L\'application offre une vue en temps réel sur le nombre de places restantes et gère un catalogue de modules de formation classés par catégorie.'
  },

  {
    id: 5,
    name: 'Pierre feuille ciseaux',
    imageUrl: '/img/pierre-feuille-ciseaux.png',
    projectUrl: 'https://pierre-papier-ciseaux-le-jeu.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/pierre-feuille-ciseaux',
    description: 'Ce projet est une implémentation web simple du jeu classique Pierre-Feuille-Ciseaux, permettant à un joueur d\'affronter l\'ordinateur.'
  },

  {
    id: 6,
    name: 'Run sausage run',
    imageUrl: '/img/run-sausage.png',
    projectUrl: 'https://run-sausage.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/Run-sausage-RunJS',
    description: 'Bienvenue dans "Run SAUSAGE Run!!!", un jeu dynamique et amusant où vous aidez une saucisse à éviter les obstacles pour survivre le plus longtemps possible. Ce jeu a été développé avec HTML, CSS, et JavaScript pour offrir une expérience de jeu légère et accessible directement depuis votre navigateur.'
  },
  
  {
    id: 7,
    name: 'Tic-Tac-Toe',
    imageUrl: '/img/tic-tac-toe.png',
    projectUrl: 'https://morpions-js.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/Tic-Tac-Toe',
    description: 'Le jeu de Morpion se joue sur une grille de 3x3 cases. Deux joueurs s\'affrontent et marquent à tour de rôle les cases de la grille avec leur symbole respectif, "X" pour le Joueur 1 et "O" pour le Joueur 2. Le gagnant est le premier joueur à aligner trois de ses symboles horizontalement, verticalement ou diagonalement. Si la grille est complètement remplie sans qu\'aucun joueur n\'ait aligné trois symboles, la partie est déclarée nulle.'
  },
  
];


const Projet = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;

  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const firstPageIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(firstPageIndex, firstPageIndex + projectsPerPage);

  return (
    <div>
      <h1 className='text-center text-3xl' >Mes différents projets</h1>
      <div className="flex flex-wrap justify-center gap-4 p-5">
        {currentProjects.map((project, index) => (
          <div key={project.id} className="custom-card-size max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out">
            <span className="text-center text-lg font-semibold block p-2"># {firstPageIndex + index + 1} #</span>
            <img className="w-full h-48 object-contain" src={project.imageUrl} alt={project.name} />
            <div className="px-6 py-4 min-h-[150px]">
              <div className="font-bold text-xl mb-2">{project.name}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
              {project.projectUrl && (
                <a href={project.projectUrl} className="text-blue-500 hover:text-blue-800 inline-block mt-4" target="_blank" rel="noopener noreferrer">Voir le projet</a>
              )}
              <br></br><a href={project.githubUrl} className="text-blue-500 hover:text-blue-800 inline-block mt-2" target="_blank" rel="noopener noreferrer">Voir le repository GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="px-4 py-2 rounded bg-blueM text-amande hover:bg-amande hover:text-blueM border-2 border-blueM hover:border-2 hover:border-blueM transition duration-300"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Précédent
        </button>
        <span>Page {currentPage + 1} sur {pageCount}</span>
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

export default Projet;