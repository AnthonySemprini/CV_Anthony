import React from 'react';


const ContactComponent = () => {
  return (
    <div className="container flex justify-center px-4 py-8">
     
        <div className=" px-4 mb-8 flex flex-col items-start lg:w-8/12 w-full ">
          <h2 className="text-blueM montserrat text-3xl font-semibold mb-8">Contactez-Moi</h2>
          <p className="text-blueM poppins-regular text-justify mb-6 ">Si vous souhaitez en savoir plus sur moi, n'hésitez pas à consulter mes différents réseaux ou à me contacter.</p>
          <ul>
            <li className='poppins-regular text-blueM lg:text-xl test-l mb-2 hover:underline'><a  href="https://www.linkedin.com/in/anthony-semprini-5a4066145/" target='_blank'><i class="fa-brands fa-linkedin"></i> linkedin.com/in/anthony-semprini</a></li>
            <li className='poppins-regular text-blueM lg:text-xl test-l mb-2 hover:underline'><a  href="mailto:semprini.anthony@gmail.com" target='_blank'><i class="fa-solid fa-envelope"></i> semprini.anthony@gmail.com</a></li>
            <li className='poppins-regular text-blueM lg:text-xl test-l mb-2 hover:underline' ><a  href="https://github.com/AnthonySemprini" target='_blank'><i className="fa-brands fa-github"></i> github.com/AnthonySemprini</a></li>
            <br></br>
            <li className="tab:block hidden poppins-regular text-blueM lg:text-xl test-l mb-2"><strong><i class="fa-solid fa-house"></i></strong> Strasbourg, FRANCE</li>
            <li className="tab:block hidden poppins-regular text-blueM lg:text-xl test-l mb-2"><strong><i class="fa-solid fa-phone"></i></strong> +33 6 06 65 03 92</li>
          </ul>
        </div>
    </div>
  );
};

export default ContactComponent;
