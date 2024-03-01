import React from 'react';


const ContactComponent = () => {
  return (
    <div className="container  px-4 py-8">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h2 className="text-blueM montserrat text-3xl font-semibold mb-6">Contactez-Moi</h2>
          <p className="text-blueM poppins-regular text-justify mb-4">Si vous souhaitez en savoir plus sur moi, n'hésitez pas à consulter mes différents réseaux ou à me contacter.</p>
          <ul>
            <li className='poppins-regular text-blueM text-xl mb-2 hover:underline'><a  href="https://www.linkedin.com/in/anthony-semprini-5a4066145/" target='_blank'><i class="fa-brands fa-linkedin"></i> linkedin.com/in/anthony-semprini</a></li>
            <li className='poppins-regular text-blueM text-xl mb-2 hover:underline'><a  href="mailto:semprini.anthony@gmail.com" target='_blank'><i class="fa-regular fa-envelope"></i> semprini.anthony@gmail.com</a></li>
            <li className='poppins-regular text-blueM text-xl mb-2 hover:underline' ><a  href="https://github.com/AnthonySemprini" target='_blank'><i className="fa-brands fa-github"></i> github.com/AnthonySemprini</a></li>
            <br></br>
            <li className="poppins-regular text-blueM text-xl mb-2"><strong><i class="fa-solid fa-house"></i></strong> Strasbourg, FRANCE</li>
            <li className="poppins-regular text-blueM text-xl mb-2"><strong><i class="fa-solid fa-phone"></i></strong> +33 6 06 06 65 03 92</li>
          </ul>
        </div>
        {/* <div className="w-full lg:w-1/2 px-4">
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
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ContactComponent;
