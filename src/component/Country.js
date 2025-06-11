import React from 'react';

const Country = ({ name, capital, flag }) => {
  return (
    <div className="card h-100">
      <img src={flag} className="card-img-top" alt={`${name} flag`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Capital:</strong> {capital || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Country;
