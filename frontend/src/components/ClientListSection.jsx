import React, { useState } from 'react';
import './ClientListSection.css';

const clients = [
  { name: 'Etrains India', url: 'https://www.etrains.in', logo: '' },
  { name: 'Orange', url: 'https://www.orange.com', logo: '' },
  { name: 'Infosys', url: 'https://www.infosys.com', logo: '' },
  { name: 'Capgemini', url: 'https://www.capgemini.com', logo: '' },
  { name: 'TCS', url: 'https://www.tcs.com', logo: '' },
  { name: 'Inflow', url: '#', logo: '' },
  { name: 'Cantilever Labs', url: 'https://www.cantileverlabs.com', logo: '' },
  { name: 'Splen Technology', url: '#', logo: '' },
  { name: 'GFG', url: 'https://www.geeksforgeeks.org', logo: '' },
  { name: 'Leadsoft', url: '#', logo: '' },
  { name: 'EZ Technology', url: '#', logo: '' },
  { name: 'Imparta', url: 'https://www.imparta.com', logo: '' },
  { name: 'GNI University', url: 'https://www.gniuniversity.com', logo: '' },
  { name: 'Sri Venkateshwara College', url: '#', logo: '' },
  { name: 'Rama Chandra College', url: '#', logo: '' },
  { name: 'Bytexl', url: 'https://bytexl.com', logo: '' },
  { name: 'KL University', url: 'https://www.kluniversity.in', logo: '' },
  { name: 'Bannari Amman', url: 'https://www.bitsathy.ac.in', logo: '' },
  { name: 'IIMS', url: '#', logo: '' },
  { name: 'IIMT', url: 'https://www.iimtindia.net', logo: '' },
  { name: 'Amity University', url: 'https://www.amity.edu', logo: '' },
  { name: 'Manav Rachna', url: 'https://manavrachna.edu.in', logo: '' },
  { name: 'DY Patil College', url: 'https://www.dypatil.edu', logo: '' },
  { name: 'LPU', url: 'https://www.lpu.in', logo: '' },
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
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="client-card"
          >
            <div className="client-logo-wrapper">
              <img
                src={client.logo || 'https://cdn-icons-png.flaticon.com/512/847/847969.png'}
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
