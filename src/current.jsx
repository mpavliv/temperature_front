import React, { useState, useEffect } from "react";

const Current = (() => {
  const [currentTemperature, setCurrentTemperature] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  function getCurrentTemperature() {
    setCurrentTemperature();
  }

  useEffect(() => {
    fetchTemperature();
  }, [])

  const fetchTemperature = async () => {
    const response = await fetch(`http://localhost:5000/temperature/current`)
    const data = await response.json();
    const temperature = data.temperature;
    setCurrentTemperature(temperature);
  }

  return (
    <div>
      current temperature is {currentTemperature}
    </div>
  )
})

export default Current;