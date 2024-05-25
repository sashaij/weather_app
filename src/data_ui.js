function handleClick(e) {
    e.preventDefault();
}

function getInputData () {
    const userInput = document.getElementById('city-input');
    const submitInput = document.getElementById('submit-button');
    let cityName;

    function getCity() {
        cityName = userInput.value;
        
    }
    getCity();

    console.log(cityName);

    return cityName.toLowerCase();
}


function displayData (data) {

    //essential data for current day
    const cityElem = document.getElementById('city-name');
    const conditionElem = document.getElementById('weather-condition');
    const currentTempElem = document.getElementById('current-temp');
    const HiLoElem = document.getElementById('high-low-temp');

    //additional info 
    const sunriseEl = document.getElementById('sunrise');
    const sunsetEl = document.getElementById('sunset');
    const chanceRainEl = document.getElementById('ch-of-rain');
    const humdidityEl = document.getElementById('humidity');
    const windSpeedEl = document.getElementById('wind');
    const feelsLikeEl = document.getElementById('feels-like');
    const percipitationEl = document.getElementById('precip');
    const pressureEl = document.getElementById('pressure');
    const visibilityEl = document.getElementById('visibility');
    const uvIndexEl = document.getElementById('uv-index');

    //hourly forecast elements


    //additional data
    sunriseEl.innerText = data.sunrise;
    sunsetEl.innerText = data.sunset;
    chanceRainEl.innerText = `${data.chanceOfRain}%`;
    humdidityEl.innerText = `${data.humidity}%`;
    windSpeedEl.innerText = `${data.wind_speed}km/h`;
    feelsLikeEl.innerText = `${data.feelsLike}°`;
    percipitationEl.innerText = `${data.precipitation}mm`;
    pressureEl.innerText = `${data.pressure}mb`;
    visibilityEl.innerText = `${data.visibility}km`;
    uvIndexEl.innerText = data.uvIndex;

    //essentian data
    cityElem.innerText = data.location;
    conditionElem.innerText = data.condition;
    currentTempElem.innerText = `${data.temperature}°C`;
    HiLoElem.innerText = `H: ${data.highTemp.toFixed(0)}° L: ${data.lowTemp.toFixed(0)}°`

    //hourly forecast data

    
    for (let i = 0; i <=6; i++) {
        //select every daily temp el
        let tempElement = document.getElementById(`temp-${i}`);
        //condition icon element
        let condIconElem = document.getElementById(`icon-${i}`);
        //condition icons for week forecast
        condIconElem.src = data.conditionIcons[i];
        tempElement.innerText = `${data.mintemps_c[i]}° ${data.maxtemps_c[i]}°`
    }

    for (let i = 0; i <= 23; i++) {
         let hourlyCondEl = document.getElementById(`hour-cond-icon-${i}`);
         let hourEl = document.getElementById(`hour-val-${i}`);
         let hourlyTempEl = document.getElementById(`hour-temp-${i}`);

         hourlyCondEl.src = data.hourlyCondition[i];
         hourEl.innerText = i;
         hourlyTempEl.innerText = data.hourlyTemperature[i];
    }


}

export { getInputData, handleClick, displayData }