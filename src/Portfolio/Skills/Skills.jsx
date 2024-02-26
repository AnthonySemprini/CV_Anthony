import React from 'react';
import './Skills.css';

const Skills = [

  {
    id: 1,
    name: 'Tools',
    list: [
      { name: 'VsCode', value: 'https://skillicons.dev/icons?i=vscode' },
      { name: 'GitHub', value: 'https://skillicons.dev/icons?i=github' },
      { name: 'Git', value: 'https://skillicons.dev/icons?i=git' }
    ]
  },

  {
    id: 2,
    name: 'Front-End',
    list: [
      { name: 'Html', value: 'https://skillicons.dev/icons?i=html' },
      { name: 'Css', value: 'https://skillicons.dev/icons?i=css' },
      { name: 'Javascript', value: 'https://skillicons.dev/icons?i=js' }
    ]
  },

  {
    id: 3,
    name: 'Back-End',
    list: [
      { name: 'Php', value: 'https://skillicons.dev/icons?i=php' },
      { name: 'Sql', value: 'https://skillicons.dev/icons?i=mysql' }
    ]
  },


  {
    id: 4,
    name: 'Frameworks',
    list: [
      { name: 'Symfony', value: 'https://skillicons.dev/icons?i=symfony' },
      { name: 'Laravel', value: 'https://skillicons.dev/icons?i=laravel' },
      { name: 'Bootstrap', value: 'https://skillicons.dev/icons?i=bootstrap' },
      { name: 'Tailwind', value: 'https://skillicons.dev/icons?i=tailwind' }
    ]
  },

  {
    id: 5,
    name: 'Librairies',
    list: [
      { name: 'React.js', value: 'https://skillicons.dev/icons?i=react' }
    ]
  },

];


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
              <h3 className='text-3xl font-bold mb-2'>{skill.name}</h3>

              <div className='flex flex-wrap justify-center items-center gap-6'>
                {skill.list.map((item, index) => (
                  <div key={index} className='flex flex-col items-center'>
                    <img className='w-16' src={item.value} alt={item.name} />
                    <p className='text-center text-xl font-bold'>{item.name}</p>
                  </div>
                ))}
              </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default SkillsComponent;