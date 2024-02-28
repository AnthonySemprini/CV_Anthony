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
      { name: 'Javascript', value: 'https://skillicons.dev/icons?i=js' },
      { name: 'React.js', value: 'https://skillicons.dev/icons?i=react' },
      { name: 'Bootstrap', value: 'https://skillicons.dev/icons?i=bootstrap' },
       { name: 'Tailwind', value: 'https://skillicons.dev/icons?i=tailwind' }
    ]
  },

  {
    id: 3,
    name: 'Back-End',
    list: [
      { name: 'Php', value: 'https://skillicons.dev/icons?i=php' },
      { name: 'MySql', value: 'https://skillicons.dev/icons?i=mysql' },
      { name: 'Symfony', value: 'https://skillicons.dev/icons?i=symfony' },
      { name: 'Laravel', value: 'https://skillicons.dev/icons?i=laravel' }
    ]
  },


  //{
  //   id: 4,
  //   name: 'Frameworks',
  //   list: [
  //     { name: 'Symfony', value: 'https://skillicons.dev/icons?i=symfony' },
  //     { name: 'Laravel', value: 'https://skillicons.dev/icons?i=laravel' },
  //     { name: 'Bootstrap', value: 'https://skillicons.dev/icons?i=bootstrap' },
  //     { name: 'Tailwind', value: 'https://skillicons.dev/icons?i=tailwind' }
  //   ]
  // },

  //{
  //   id: 5,
  //   name: 'Librairies',
  //   list: [
  //     { name: 'React.js', value: 'https://skillicons.dev/icons?i=react' }
  //   ]
  // },

];


function SkillsComponent() {
  return (
    <div id="full" className='w-full flex flex-col items-center'>
      {/* Titre */}
      <h2 className=' montserrat text-center text-blueM text-4xl font-bold my-5 tab:block hidden'>Compétences</h2>

      {/* Container pour les cartes */}
      <div className='w-full px-2 flex flex-wrap justify-center md:justify-start'>
        {Skills.map((skill) => (
          <div key={skill.id} className='w-full md:w-1/2 p-2'>
            <div className='flex flex-col items-center  p-2 '>
              <h3 className='montserrat text-3xl text-blueM font-bold mb-4'>{skill.name}</h3>

              <div className='flex flex-wrap justify-center items-center gap-6'>
                {skill.list.map((item, index) => (
                  <div key={index} className='flex flex-col items-center'>
                    <img className='w-16' src={item.value} alt={item.name} />
                    <p className='text-center  poppins-regular text-blueM'>{item.name}</p>
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