import React from 'react';
import './Skills.css';

  const Skills = [

    {
      id:1,
      name: 'Tools',
      kills: 'https://skillicons.dev/icons?i=vscode,github,git',
      list :[
        { name: 'VsCode', value: 5},
        { name: 'GitHub', value: 4},
        { name: 'Git' , value: 3}
      ]
    },

    {
      id:2,
      name: 'Front-End',
      kills: 'https://skillicons.dev/icons?i=html,css,js',
      list:[
        {name: 'Html', value: 5},
        { name: 'Css', value: 5 },
        { name: 'Javascript', value: 3 }
      ]
    },
 
    {
      id:3,
      name: 'Back-End',
      kills: 'https://skillicons.dev/icons?i=php,mysql',
      list:[
        {name:'Php', value: 4},
        {name:'Sql', value: 3}
      ]
    },


    {
      id:4,
      name: 'Frameworks',
      kills: 'https://skillicons.dev/icons?i=symfony,laravel,bootstrap,tailwind',
      list:[
        { name: 'Symfony', value: 4},
        { name: 'Laravel', value: 3},
        { name: 'Bootstrap', value: 3},
        { name: 'Tailwind', value: 3}
      ]
    },

    {
      id:5,
      name: 'Librairies',
      kills: 'https://skillicons.dev/icons?i=react',
      list:[
        { name:'React.js', value: 3}
      ]
    },

  ];

// Fonction pour générer les étoiles pleines et vides
const generateStars = (value, maxValue = 5) => {
  let stars = '';
  // Ajouter les étoiles pleines
  for (let i = 0; i < value; i++) {
    stars += '★'; // Étoile pleine
  }
  // Ajouter les étoiles vides pour le reste jusqu'à atteindre la valeur maximale
  for (let i = value; i < maxValue; i++) {
    stars += '☆'; // Étoile vide
  }
  return stars;
};


  function SkillsComponent() {
    return (
      <div>

        {/* Titre */}

        <h2 className='text-center text-3xl'>Compétences</h2>

        {/* Skills cartes */}

        {Skills.map((skill) => (
          <div key={skill.id} className='grid grid-cols-4 gap-4 m-6 '>
            <h3 className='text-2xl'>{skill.name}</h3>
            <div align="center">
              <a href="https://skillicons.dev">
                <img className='my-2' src={ skill.kills } />
              </a>
            </div>
            <ul>
              {skill.list.map((item, index) => (
                <li key={index}>{`${item.name} ${generateStars(item.value)}`}</li>
              ))}
            </ul>
          </div>
        ))}

        
      </div>
    );
  }

export default SkillsComponent;