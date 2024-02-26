import React from 'react';
import ProfilComponent from '../Home/Home';
import ProjetComponent from '../Projet/Projet';
import CertifComponent from '../Certif/Certif';
import SkillsComponent from '../Skills/Skills';
import ReactFullpage from '@fullpage/react-fullpage';

const FullpageComponent = () => (
  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'} // Vous pouvez obtenir une clé sur le site officiel de fullPage.js
    scrollingSpeed = {1000} /* Options ici */
    anchors={['profil', 'skills', 'projets', 'certif']}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
        <section id="profil" className='section flex  bg-amande p-5  '><ProfilComponent /></section>
        <section id="skills" className='section flex  bg-amande p-5   '><SkillsComponent /></section>
        <section id="projets" className='section flex  bg-amande p-5 '><ProjetComponent /></section>
        <section id="certif" className='section flex  bg-amande p-5 '><CertifComponent /></section>
        {/* <div id="contact" className='flex bg-amande p-5 '><ContactComponent /></div> */}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullpageComponent;
