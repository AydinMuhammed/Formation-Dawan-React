import { useState, useEffect } from 'react';

export default function Meteo() {
  const [meteoData, setMeteoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=strasbourg&lang=fr&units=metric&appid=1a43a926e6182575ac979f1d71040a4a');
        
        if (!response.ok) {
          throw new Error('Erreur');
        }
        
        const data = await response.json();
        setMeteoData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[]);

  

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  if (!meteoData) return <div>Pas de données disponibles</div>;

  return (
    <>
      <h2>La ville : {meteoData.name}</h2>
      <p>Description: {meteoData.weather[0].description}</p>
      <p>Température: {meteoData.main.temp}°C</p>
    </>
  );
}