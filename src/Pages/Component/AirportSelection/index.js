import React from 'react';
import countries from "./countries.json"
import airports from "./airports.json"
import positions from "./positions.json"


function AirportPositionDropdown(props) {

  const options = [];

  countries.forEach(country => {

    const countryAirports = airports.filter(airport => airport.country === country.name);

    countryAirports.forEach(airport => {

      positions.forEach(position => {

        options.push({
          value: `${airport.code}_${position}`,
          label: `${country.name} -  ${airport.name}_${position}`
        });

      });

    });

  });

  return (
    <select className={props.class}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>  
      ))}
    </select>
  );

}

export default AirportPositionDropdown;