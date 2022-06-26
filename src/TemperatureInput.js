import React from "react";

const scaleNames ={
  c:"Celsius",
  f:"Fahrenheit"
 }
const TemperatureInput = ({ scale, temperature, handleChange }) => {
  return (
    <fieldset>
      <legend>Enter temperature in: {scale}</legend>
      <input value={temperature}
        onChange={(e) => handleChange(e.target.value)}
      />
    </fieldset>
  );
};

export default TemperatureInput;
