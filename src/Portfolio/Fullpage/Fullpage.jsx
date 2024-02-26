import React from 'react';
import ProfilComponent from '../Home/Home';
import ProjetComponent from '../Projet/Projet';
import CertifComponent from '../Certif/Certif';
import SkillsComponent from '../Skills/Skills';
import ContactComponent from '../Contact/Contact';
import ReactFullpage from '@fullpage/react-fullpage';

const FullpageComponent = () => (
  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'} // Vous pouvez obtenir une clé sur le site officiel de fullPage.js
    scrollingSpeed = {1000} /* Options ici */
    anchors={['profil1', 'skills1', 'projets1', 'certif1','contact1']}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
        <section id="profil" className='section flex  bg-amande p-5  '><ProfilComponent /></section>
        <section id="skills" className='section flex  bg-amande p-5   '><SkillsComponent /></section>
        <section id="projets" className='section flex  bg-amande p-5 '><ProjetComponent /></section>
        <section id="certif" className='section flex  bg-amande p-5 '><CertifComponent /></section>
        <div id="contact" className='section flex bg-amande p-5 '><ContactComponent /></div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullpageComponent;
