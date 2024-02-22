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
  {
    id: 3,
    name: 'Pierre feuille ciseaux',
    imageUrl: '/img/pierre-feuille-ciseaux.png',
    projectUrl: 'https://pierre-papier-ciseaux-le-jeu.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/pierre-feuille-ciseaux',
    description: 'Ce projet est une implémentation web simple du jeu classique Pierre-Feuille-Ciseaux, permettant à un joueur d\'affronter l\'ordinateur.'
  },
  {
    id: 4,
    name: 'Run sausage run',
    imageUrl: '/img/run-sausage.png',
    projectUrl: 'https://run-sausage.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/Run-sausage-RunJS',
    description: 'Bienvenue dans "Run SAUSAGE Run!!!", un jeu dynamique et amusant où vous aidez une saucisse à éviter les obstacles pour survivre le plus longtemps possible. Ce jeu a été développé avec HTML, CSS, et JavaScript pour offrir une expérience de jeu légère et accessible directement depuis votre navigateur.'
  },
  {
    id: 5,
    name: 'Tic-Tac-Toe',
    imageUrl: '/img/tic-tac-toe.png',
    projectUrl: 'https://morpions-js.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/Tic-Tac-Toe',
    description: 'Le jeu de Morpion se joue sur une grille de 3x3 cases. Deux joueurs s\'affrontent et marquent à tour de rôle les cases de la grille avec leur symbole respectif, "X" pour le Joueur 1 et "O" pour le Joueur 2. Le gagnant est le premier joueur à aligner trois de ses symboles horizontalement, verticalement ou diagonalement. Si la grille est complètement remplie sans qu\'aucun joueur n\'ait aligné trois symboles, la partie est déclarée nulle.'
  },
  {
    id: 6,
    name: 'BarberShop',
    imageUrl: '/img/barber.png',
    projectUrl: '',
    githubUrl: 'https://github.com/AnthonySemprini/barber',
    description: 'Bienvenue dans mon projet de création d\'un site de réservation en ligne et click & collect pour coiffeurs-barbiers, visant à simplifier la gestion des rendez-vous et la vente de produits avec une interface intuitive. Ce site permet aux clients de réserver facilement leur créneau et d\'acheter des produits en click & collect, tandis que les professionnels bénéficient d\'outils de gestion des rendez-vous et des produits. Le site est développé avec PHP (Symfony), JavaScript, HTML, CSS, et utilise une base de données MySQL.'
  },
  {
    id: 7,
    name: 'Blog Laravel',
    imageUrl: '/img/blog.png',
    projectUrl: 'https://morpions-js.netlify.app/',
    githubUrl: 'https://github.com/AnthonySemprini/Tic-Tac-Toe',
    description: 'Le jeu de Morpion se joue sur une grille de 3x3 cases. Deux joueurs s\'affrontent et marquent à tour de rôle les cases de la grille avec leur symbole respectif, "X" pour le Joueur 1 et "O" pour le Joueur 2. Le gagnant est le premier joueur à aligner trois de ses symboles horizontalement, verticalement ou diagonalement. Si la grille est complètement remplie sans qu\'aucun joueur n\'ait aligné trois symboles, la partie est déclarée nulle.'
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
