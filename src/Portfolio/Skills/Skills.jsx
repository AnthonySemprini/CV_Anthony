import React from 'react';
import './Skills.css';

  const Skills = [

    {
      id:1,
      name: 'Tools',
      list :[
        { name: 'VsCode', value: 'https://skillicons.dev/icons?i=vscode'},
        { name: 'GitHub', value: 'https://skillicons.dev/icons?i=github' },
        { name: 'Git' , value: 'https://skillicons.dev/icons?i=git'}
      ]
    },

    {
      id:2,
      name: 'Front-End',
      list: [
        { name: 'Html', value: 'https://skillicons.dev/icons?i=vscode'},
        { name: 'Css', value: 'https://skillicons.dev/icons?i=css' },
        { name: 'Javascript', value: 'https://skillicons.dev/icons?i=js' }
      ]
    },
 
    {
      id:3,
      name: 'Back-End',
      list:[
        {name:'Php', value: 'https://skillicons.dev/icons?i=php'},
        {name:'Sql', value: 'https://skillicons.dev/icons?i=mysql'}
      ]
    },


    {
      id:4,
      name: 'Frameworks',
      list:[
        { name: 'Symfony', value: 'https://skillicons.dev/icons?i=symfony'},
        { name: 'Laravel', value: 'https://skillicons.dev/icons?i=laravel'},
        { name: 'Bootstrap', value: 'https://skillicons.dev/icons?i=bootstrap'},
        { name: 'Tailwind', value: 'https://skillicons.dev/icons?i=tailwind'}
      ]
    },

    {
      id:5,
      name: 'Librairies',
            list:[
        { name:'React.js', value: 'https://skillicons.dev/icons?i=react'}
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
              <h3 className='text-2xl mb-2'>{skill.name}</h3>
              <ul className='flex flex-row list-inside gap-6'>
                {skill.list.map((item, index) => (
                  <li key={index} className='text-center'><img src={item.value} />{`${item.name}`} </li>
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