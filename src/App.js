 import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './component/Country';

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,capital,flags')
      .then(response => response.json())
      .then(data => setCountryList(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Country List</h1>
      <div className="row">
        {countryList.map((country, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <Country
              name={country.name}
              capital={country.capital}
              flag={country.flags.png}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; 