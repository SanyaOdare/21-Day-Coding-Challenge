const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!
  let weather = {temperature, condition, windSpeed, windDirection};
  weather.temperature = Math.round((weather.temperature - 32) * 5/9);
  weather.windSpeed = Math.round(weather.windSpeed / 2.237);
  console.log(storeWeatherConditions);
  return weather;
  // Remember to return an object!
}

storeWeatherConditions();