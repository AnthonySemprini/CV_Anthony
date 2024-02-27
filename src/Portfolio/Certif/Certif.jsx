import React from 'react';
import './Certif.css';

function CertifComponent() {
    const certif = [
        { name: 'Introduction to HTML', orga: 'Sololearn, Janvier 2023', statut: 'Obtenu' },
        { name: 'Introduction to CSS', orga: 'Sololearn, Février 2023', statut: 'Obtenu' },
        { name: 'Responsive web Design', orga: 'FreeCodeCamp, Février 2024', statut: 'Obtenu' },
        { name: 'A2 English for Developers', orga: 'FreeCodeCamp, Janvier 2024', statut: 'Obtenu' },
        { name: 'Module 1 : Le RGPD et ses notions clés', orga: 'L\'atelier RGPD CNIL, Février 2024', statut: 'Obtenu' },
        { name: 'MODULE 2 : LES PRINCIPES DE LA PROTECTION DES DONNÉES', orga: 'L\'atelier RGPD CNIL, Février 2024', statut: 'Obtenu' },
        { name: 'Front End Development Libraries', orga: 'FreeCodeCamp', statut: 'En cours' },
        { name: 'Fondamentaux de la cybersécurité', orga: 'Google Career Certificates', statut: 'En cours' },
    ];
    const forma = [
        { name: 'Remise à niveau (Développement Web)', orga:'Elan Formation, Janvier à Avril 2023', statut: 'Obtenu' },
        { name: 'Titre pro de niveau 5(Bac+2), développement web et web mobile', orga:'Elan Formation, Mai à Décembre 2023', statut: 'Obtenu' },
    ];

    return (
        <div className="container mx-auto px-2">

            <div className="forma-section">
                <h2 className="text-2xl text-blueM montserrat font-bold text-center my-3">Mes Formations</h2>
                <div className="grid md:grid-cols-3 gap-3">
                    {forma.map((form, index) => (
                        <div key={`form-${index}`} className="detail-view p-4 shadow-md rounded-lg bg-gray-200">
                            <h3 className="montserrat text-blueM font-bold">{form.name}</h3>
                            <p className=" poppins-regular text-blueM text-sm">{form.orga}</p>
                            <span className={`inline-block text-blueM poppins-regular mt-2 py-1 px-3 rounded-full text-xs font-medium ${form.statut === 'Obtenu' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                                {form.statut}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="certif-section">
                <h2 className="text-2xl montserrat text-blueM font-bold text-center my-3">Mes Certifications</h2>
                <div className="grid md:grid-cols-3 gap-3 mb-10">
                    {certif.map((cert, index) => (
                        <div key={index} className="detail-view p-4 shadow-md rounded-lg bg-gray-100">
                            <h3 className="montserrat text-blueM font-bold">{cert.name}</h3>
                            <p className="text-sm  poppins-regular text-blueM">{cert.orga}</p>
                            <span className={`inline-block text-blueM poppins-regular mt-2 py-1 px-3 rounded-full text-xs font-medium ${cert.statut === 'Obtenu' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                                {cert.statut}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}




export default CertifComponent;
