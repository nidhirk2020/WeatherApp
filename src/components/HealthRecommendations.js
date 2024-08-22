// HealthRecommendations.js
import React from 'react';

function HealthRecommendations({ weather }) {
  const getHealthRecommendation = (condition) => {
    // Logic for health recommendation based on weather condition
    switch (condition) {
      case 'Clear':
        return 'Enjoy the sun, but dont forget your sunscreen!';
      case 'Rain':
        return 'Carry an umbrella and stay dry!';
      case 'Snow':
        return 'Dress warmly and drive safely!';
      case 'Clouds':
        return 'Its a bit cloudy, maybe a light jacket will do.';
      default:
        return 'Stay safe and take care!';
    }
  };

  return (
    <div className="health-recommendation">
      <h2>Health Recommendation</h2>
      <p>{getHealthRecommendation(weather.data.condition)}</p>
    </div>
  );
}

export default HealthRecommendations;
