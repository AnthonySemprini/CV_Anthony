import React, { useState } from 'react';
import './Certif.css';

function CertifComponent() {
    const certifications = {
        Titre_Professionnel: [
           { name: 'Développeur Web et Web mobile', date: 'Décembre 2023', statut: 'Obtenu' },
       ],
     L$atelier_RGPD_Cnil: [
        {name: 'Module 1 : Le RGPD et ses notions clés', date: 'Février 2024', statut: 'Obtenu' },
        { name: 'Module 2 : Les principes de la protection des données', date: 'Février 2024', statut: 'Obtenu' },
        { name: 'Module 3 : Les résponsabilités des acteurs', date: 'Mars 2024', statut: 'Obtenu' },
    ],
     Sololearn: [
        { name: 'Introduction to HTML',date:'Janvier 2023', statut: 'Obtenu' },
        { name: 'Introduction to CSS',date:'Mars 2023', statut: 'Obtenu' },
        { name: 'PHP',date:'Mars 2024', statut: 'Obtenu' },

    ],
     FreeCodeCamp: [
        { name: 'A2 English for Developers', date: ' Janvier 2024', statut: 'Obtenu' },
        { name: 'Responsive web Design', date: ' Février 2024', statut: 'Obtenu' },
        { name: 'Front End Development Libraries', date: '', statut: 'En cours' },
    ],
     Google_Certificates: [
        { name: 'Fondamentaux de la cybersécurité', date: '', statut: 'En cours' },
    ],
    };

    const [openedOrga, setOpenedOrga] = useState("Titre_Professionnel");

    const toggleOrga = (orga) => {
        if (openedOrga === orga) {
            setOpenedOrga(null); // Ferme l'accordéon si on clique sur l'organisme déjà ouvert
        } else {
            setOpenedOrga(orga); // Ouvre l'accordéon de l'organisme cliqué
        }
    };

    return (
        <div className="container mx-auto px-2">
            <div className="certif-section">
                <h2 className="text-4xl montserrat text-blueM font-bold text-center my-3">Qualifications</h2>
                {Object.entries(certifications).map(([orga, certifs], index) => (
                    <div key={index} className="orga-view my-6 p-6 shadow-md rounded-lg bg-gray-100 cursor-pointer" onClick={() => toggleOrga(orga)}>
                        <h3 className="montserrat text-xl text-blueM font-bold">
                            {orga.replace(/_/g, ' ').replace(/\$/g, "'")}
                            <span className="float-right transform rotate-90">
                                {openedOrga === orga ? '▼' : '▶︎'}
                            </span>
                        </h3>
                        {openedOrga === orga && (
                            <div className="certif-details mt-4 text-sm poppins-regular text-blueM">
                                {certifs.map((cert, index) => (
                                    <div key={index} className="mt-2">
                                        <p className='poppins-regular'><strong>{cert.name}</strong></p>
                                        <p className='poppins-regular'>{cert.date}</p>
                                        <span className={`inline-block mt-2 py-1 px-3 rounded-full text-xs font-medium ${cert.statut === 'Obtenu' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                                            {cert.statut}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default CertifComponent;