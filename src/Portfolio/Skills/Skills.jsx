import React, { useState }  from 'react';
import './Skills.css';

  const Skills = [

    {
      id:1,
      names: 'Tools',
      list :('VsCode', 'GitHub', 'Mamp','Laragon')
    },

    {
      id:2,
      names: 'Front-End',
      list:('Html','Css','Javascript')
    },

    {
      id:3,
      names: 'Back-End',
      list:('Php','Sql')
    },

    {
      id:4,
      names: 'Frameworks',
      list:('Symfony','Laravel','Bootstrap','Tailwind')
    },

    {
      id:5,
      names: 'Librairies',
      list:('React.js','Moment,js')
    },

  ];

const SkillsComponent = () => {

  return(
    <div>

      {/* Titre */}

      <h1 className='text-center text-3xl' >Compétences</h1>
    </div>
  )
  };

export default SkillsComponent;