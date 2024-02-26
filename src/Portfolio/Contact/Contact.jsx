import React, { useState } from 'react';

import './Contact.css';

function ContactComponent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Traitement des données du formulaire
    //     console.log(formData);
    //     alert("Votre message a été envoyé !");
    //     // Ici, vous pourriez ajouter une logique pour envoyer les données à un serveur, etc.
    // };

    return (

        <form  data-netlify="true" name="contactForm" className="space-y-4 max-w-md mx-auto my-10">
            <input type="hidden" name="form-name" value="contactForm" />
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" name="firstName" id="firstName" required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" name="lastName" id="lastName" required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Numéro de téléphone (facultatif)</label>
                <input type="tel" name="phoneNumber" id="phoneNumber"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse mail</label>
                <input type="email" name="email" id="email" required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows="4" required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={handleChange}></textarea>
            </div>
            <button type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Envoyer
            </button>
        </form>
    );
}

export default ContactComponent;