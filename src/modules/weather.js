const weather = (() => {
  function convertData(data) {
    const {
      name: cityName,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { speed: windSpeed },
    } = data;
    return { cityName, temperature, feelsLike, humidity, windSpeed };
  }

  async function getData(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;

    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      return convertData(data);
    } catch (error) {
      alert(error);
      return null;
    }
  }

  return { getData };
})();

export default weather;
