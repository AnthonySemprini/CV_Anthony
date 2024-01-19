import React from 'react';

function MyButton() {
    function handleClick() {
      alert('Merci d\'avoir télécharger mon CV !');
    }
    return (
      <div className="download">
       <a onClick={handleClick} href="./img/Anthony_Semprini_CV.pdf" download>DOWNLOAD CV</a>
  </div>
    );
  }

  export default MyButton;