import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = (props) => {
  const [weatherData, setWeatherData] = useState('')
  const [pending, setPending] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleCityChange = useCallback((city) => {
    setIsError(false)
    setPending(true)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e35d409a8d6af9bd0a395b47b6f0ec3b&units=metric`)
      .then(res => {
        if (res.status === 200) {
          return (res.json())
            .then(data => {
              const weatherApi = {
                city: data.name,
                temp: data.main.temp,
                icon: data.weather[0].icon,
                description: data.weather[0].description
              }
              setPending(false)
              setWeatherData(weatherApi);
            })
        } else setPending(false)
        setIsError(true)
      })
  }, [])

  return (
    <section>
      <PickCity action={handleCityChange} />
      {weatherData && !isError && <WeatherSummary {...weatherData} />}
      {pending && <Loader />}
      {isError && <ErrorBox />}
    </section>
  )
};

export default WeatherBox;