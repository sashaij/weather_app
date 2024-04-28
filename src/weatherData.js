
export default function getWeatherData (city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=1ffba976248c430086994033241404&q=${city}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}