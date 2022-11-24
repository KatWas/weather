import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import {useCallback, useState} from 'react';


const WeatherBox = (props) => {

  const handleCityChange = useCallback;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}e35d409a8d6af9bd0a395b47b6f0ec3b&units=metric`)
   .then(res => res.json())
   .then(data => {
     console.log(data);
   });
  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;