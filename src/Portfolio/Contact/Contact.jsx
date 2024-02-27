import React from 'react';

const ContactComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h2 className="text-blueM montserrat text-3xl font-semibold mb-6">Contactez-Moi</h2>
          <p className="text-blueM poppins-regular mb-4">Si vous avez des questions ou souhaitez en savoir plus sur moi, n'hésitez pas à me contacter.</p>
          <ul>
            <li className="poppins-regular text-blueM mb-2"><strong>Adresse :</strong> 53 rue de la charmille, 67200 STRASBOURG</li>
            <li className="poppins-regular text-blueM mb-2"><strong>Téléphone :</strong> +33 6 06 06 65 03 92</li>
            <li className="poppins-regular text-blueM mb-2"><strong>Email :</strong> semprini.anthony@gmail.com</li>
            <li className="poppins-regular text-blueM mb-2"><strong>GitHub :</strong> https://github.com/AnthonySemprini</li>
            <li className="poppins-regular text-blueM mb-2"><strong>Linkedin :</strong> https://www.linkedin.com/in/anthony-semprini-5a4066145/</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-blueM montserrat text-xl font-semibold mb-4">Formulaire de contact</h3>
            <form>
              <div className="mb-4">
                <label className="block poppins-regular text-blueM text-sm font-bold mb-2" htmlFor="name">
                  Nom et Prénom
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-blueM leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Votre nom" />
              </div>
              <div className="mb-4">
                <label className="block poppins-regular text-blueM text-sm font-bold mb-2" htmlFor="email">
                  Adresse Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-blueM leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="votre.email@exemple.com" />
              </div>
              <div className="mb-4">
                <label className="block poppins-regular text-blueM text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-blueM leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Votre message"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blueM hover:bg-amande hover:text-blueM text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
