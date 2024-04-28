
export default function getWeatherData (city) {

    //current data and forecast
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=1ffba976248c430086994033241404&q=${city}&days=7`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('forecast data:');

        console.log(data);
    })
}

function appWeatherData (apiData) {
    let essentialData = {
        
    }

    essentialData.condition = apiData.condition.code;
    essentialData.temperature = apiData.temp_c;
    essentialData.humidity = apiData.humidity;

}