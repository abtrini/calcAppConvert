import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";


const Calculator = () => {


  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("");
  
  
  const celsius = scale === "Celsius" ? tryConvert(temperature, toFahrenheit) : temperature;
  const fahrenheit =  scale === "Fahrenheit" ? tryConvert(temperature, toCelsius)  : temperature;

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }


  const handleCelsiusChange= temperature => {
    setScale("Celsius");
    setTemperature(temperature)
  }

  const handleFahrenheitChange= temperature => {
    setScale("Fahrenheit");
    setTemperature(temperature)
  }

  return (
    <div>
      
      <TemperatureInput scale="Celcius" temperature={fahrenheit} handleChange={handleCelsiusChange}/>
      <TemperatureInput scale="Fahrenheit" temperature={celsius}  handleChange={handleFahrenheitChange}/>
      <BoilingVerdict celsius={temperature} />
    </div>
  );
};

export default Calculator;
