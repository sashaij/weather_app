import { displayData } from "./data_ui.js";

function getWeatherData (city) {
    //current data and forecast
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=1ffba976248c430086994033241404&q=${city}&days=8`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('forecast data:');

        console.log(data);




        let essentialData = {
        
        }
        //city name
        essentialData.location = data.location.name;
        //condition
        essentialData.condition = data.current.condition.text;
        //feels like
        essentialData.feelsLike = data.current.feelslike_c;
        //current temperature
        essentialData.temperature = data.current.temp_c;
        //highest temp
        essentialData.highTemp = data.forecast.forecastday[0].day.maxtemp_c;
        //lowest temp
        essentialData.lowTemp = data.forecast.forecastday[0].day.mintemp_c;
        //humidity
        essentialData.humidity = data.current.humidity;
        //sunrise
        essentialData.sunrise = data.forecast.forecastday[0].astro.sunrise;
        //sunset
        essentialData.sunset = data.forecast.forecastday[0].astro.sunset;
        //chance of rain
        essentialData.chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
        //chance of snow
        essentialData.chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_snow;
        //wind speed
        essentialData.wind_speed = data.current.wind_kph;
        //wind direction
        essentialData.wind_direction = data.current.wind_dir;
        //percipitation
        essentialData.precipitation = data.forecast.forecastday[0].day.totalprecip_mm;
        //pressure
        essentialData.pressure = data.current.pressure_mb;
        //visibility
        essentialData.visibility = data.forecast.forecastday[0].day.avgvis_km;
        //uv-index
        essentialData.uvIndex = data.current.uv;

        //maximum temperatures forecast
        essentialData.maxtemps_c = [];
        //minimum temps forecast
        essentialData.mintemps_c = [];

        //condition icons for week forecast
        essentialData.conditionIcons = [];

        
        for (let i = 0; i <= 6; i++ ) {
            essentialData.maxtemps_c.push(data.forecast.forecastday[i].day.maxtemp_c.toFixed(0));

            essentialData.mintemps_c.push(data.forecast.forecastday[i].day.mintemp_c.toFixed(0));

            essentialData.conditionIcons.push(`https:${data.forecast.forecastday[i].day.condition.icon}`) ;
        }

        displayData(essentialData);
    
        console.log('current data: ');
        console.log(essentialData);
    })
}
//essential data to be used
/* function currentWeatherData (apiData) {
    let essentialData = {
        
    }
    //city name
    essentialData.location = apiData.location.name;
    //condition
    essentialData.condition = apiData.current.condition.text;
    //current temperature
    essentialData.temperature = apiData.current.temp_c;
    //highest temp
    essentialData.highTemp = apiData.forecast.forecastday[0].day.maxtemp_c;
    //lowest temp
    essentialData.lowTemp = apiData.forecast.forecastday[0].day.mintemp_c;
    //humidity
    essentialData.humidity = apiData.current.humidity;
    //sunrise
    essentialData.sunrise = apiData.forecast.forecastday[0].astro.sunrise;
    //sunset
    essentialData.sunrise = apiData.forecast.forecastday[0].astro.sunset;
    //chance of rain
    essentialData.chanceOfRain = apiData.forecast.forecastday[0].day.daily_chance_of_rain;
    //chance of snow
    essentialData.chanceOfRain = apiData.forecast.forecastday[0].day.daily_chance_of_snow;
    //wind speed
    essentialData.wind_speed = apiData.current.wind_kph;
    //wind direction
    essentialData.wind_direction = apiData.current.wind_dir;
    //percipitation
    essentialData.visiblity = apiData.forecast.forecastday[0].day.totalprecip_mm;
    //pressure
    essentialData.pressure = apiData.current.pressure_mb;
    //visibility
    essentialData.visiblity = apiData.forecast.forecastday[0].day.avgvis_km;


    console.log('current data: ');
    console.log(essentialData);
}
 */


export { getWeatherData }