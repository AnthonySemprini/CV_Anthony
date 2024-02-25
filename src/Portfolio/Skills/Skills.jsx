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
    <div id="full" className='w-full flex flex-col items-center'>
      {/* Titre */}
      <h2 className='text-center text-3xl my-5'>Compétences</h2>

      {/* Container pour les cartes */}
      <div className='w-full px-4 flex flex-wrap justify-center md:justify-start'>
        {Skills.map((skill) => (
          <div key={skill.id} className='w-full md:w-1/2 p-2'>
            <div className='flex flex-col items-center  p-4 '>
              <h3 className='text-2xl mb-2'>{skill.name}</h3>
              <a href="https://skillicons.dev">
                <img className='my-2' alt={`Icone de ${skill.name}`} src={skill.kills} />
              </a>
              <ul className='list-disc'>
                {skill.list.map((item, index) => (
                  <li key={index} className='ml-4'>{`${item.name} ${generateStars(item.value)}`}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default SkillsComponent;