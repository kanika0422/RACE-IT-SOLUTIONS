// src/components/ClientListSection.js
import React, { useState } from 'react';
import './ClientListSection.css';

// Function to get favicon from Google service
const getFavicon = (url) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
  } catch {
    return 'https://cdn-icons-png.flaticon.com/512/847/847969.png'; // fallback
  }
};

const clients = [
  { name: 'Etrains India', url: 'https://www.etrains.in', logo: '' },
  { name: 'Orange', url: 'https://www.orange.com', logo: '' },
  { name: 'Infosys', url: 'https://www.infosys.com', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-infosys-2850045-2370783.png' },
  { name: 'Capgemini', url: 'https://www.capgemini.com', logo: 'https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png' },
  { name: 'TCS', url: 'https://www.tcs.com', logo: 'https://cdn.brandfetch.io/idK2mWG2SJ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
  { name: 'Inflow', url: '#', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBXmqaAmP6H8ZDwwogalDmcZs6TqmvNBCYA&s' },
  { name: 'Cantilever Labs', url: 'https://www.cantileverlabs.com', logo: '' },
  { name: 'Splen Technology', url: '#', logo: 'https://media.licdn.com/dms/image/v2/C510BAQEr6vzEsVrQTA/company-logo_200_200/company-logo_200_200/0/1630620186665?e=2147483647&v=beta&t=sove0Vh9eNJLb30w1IhpCxAiB4wjY0HUw52hNNcEAZw' },
  { name: 'GFG', url: 'https://www.geeksforgeeks.org', logo: '' },
  { name: 'Leadsoft', url: '#', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7m5d7dh4Gi4cgFH85MUt_oclEvWV7k8o2hw&s' },
  { name: 'EZ Technology', url: '#', logo: 'https://media.licdn.com/dms/image/v2/C560BAQEgSgs7mzYTxQ/company-logo_200_200/company-logo_200_200/0/1630666082545?e=2147483647&v=beta&t=U473PGddYxX6bx9Smbn2SkJqA8Z65kW7bRrb7USmlqY' },
  { name: 'Imparta', url: 'https://www.imparta.com', logo: '' },
  { name: 'GNI University', url: 'https://www.gniuniversity.com', logo: 'https://pbs.twimg.com/profile_images/1300397577867730946/5IIpWPFN_400x400.jpg' },
  { name: 'Sri Venkateshwara College', url: '#', logo: 'https://www.svc.ac.in/svc_home/img/logo_main.png' },
  { name: 'Rama Chandra College', url: '#', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRiRiCMupzQQ6xdwxH-sxYVRhWKWvhF5l8w&s' },
  { name: 'Bytexl', url: 'https://bytexl.com', logo: '' },
  { name: 'KL University', url: 'https://www.kluniversity.in', logo: '' },
  { name: 'Bannari Amman', url: 'https://www.bitsathy.ac.in', logo: '' },
  { name: 'IIMS', url: '#', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWod_vrm9e_N7qCN7ZffsQO0N5-DQdXzC2Q&s' },
  { name: 'IIMT', url: 'https://www.iimtindia.net', logo: '' },
  { name: 'Amity University', url: 'https://www.amity.edu', logo: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Amity_University_logo.png' },
  { name: 'Manav Rachna', url: 'https://manavrachna.edu.in', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq6bYvTYm9laTUwhagWO8Rdh7AwevX9JWVw&s' },
  { name: 'DY Patil College', url: 'https://www.dypatil.edu', logo: '' },
  { name: 'LPU', url: 'https://www.lpu.in', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ae-RHWEL4sUfohHrus_Qo-U8lNanAFoUUw&s' },
];

const ClientListSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="client-list-section" id="clients">
      <h2 className="client-heading">Client List</h2>
      <p className="client-subtext">We have more than <strong>250+ clients</strong></p>

      <input
        type="text"
        placeholder="Search client..."
        className="client-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="client-grid">
        {filteredClients.map((client, index) => (
          <a
            key={index}
            href={client.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="client-card"
          >
            <div className="client-logo-wrapper">
              <img
                src={client.logo || getFavicon(client.url)}
                alt={client.name}
                className="client-logo"
              />
            </div>
            <span className="client-name">{client.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ClientListSection;
