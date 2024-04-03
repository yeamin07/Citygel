import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountrySelection = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch countries and flags
    axios.get('https://countriesnow.space/api/v0.1/countries/states')
      .then(response => {
        setCountries(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountryChange = async(event) => {
    const selectedCountryName = event.target.value;
    console.log(selectedCountryName);
    setSelectedCountry(selectedCountryName);
    setSelectedCity('');
    // Fetch cities for selected country
   await axios.post('https://countriesnow.space/api/v0.1/countries/states', { country: selectedCountryName })
      .then(response => {
        setCities(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center mb-4">
        <label htmlFor="country" className="mr-2">Select a Country:</label>
        <select id="country" className="px-4 py-2 border border-gray-300 rounded-md" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country...</option>
          {countries.map(country => (
            <option key={country.name} value={country.name}>{country.name}</option>
          ))}
        </select>
      </div>
      {selectedCountry && (
        <div className="flex items-center">
          <img src={`https://countriesnow.space/api/v0.1/countries/flag/images/${selectedCountry}`} alt={`${selectedCountry} flag`} className="w-8 h-8 mr-2" />
          <label htmlFor="city" className="mr-2">Select a City:</label>
          <select id="city" className="px-4 py-2 border border-gray-300 rounded-md" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city...</option>
            {cities.map(city => (
             <div>{city.state.map(st=>(
              <option key={st.state_code} value={st.name}>{st.name}</option>
             ))}</div>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CountrySelection;