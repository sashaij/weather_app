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


    sunriseEl.innerText = data.sunrise;
    sunsetEl.innerText = data.sunset;
    chanceRainEl.innerText = data.chanceOfRain;
    humdidityEl.innerText = data.humidity;
    windSpeedEl.innerText = data.wind_speed;
    feelsLikeEl.innerText = data.feelsLike;
    percipitationEl.innerText = data.precipitation;
    pressureEl.innerText = data.pressure;
    visibilityEl.innerText = data.visibility;
    uvIndexEl.innerText = data.uvIndex;


    //select every daily temp el
    //and assign forecast temp value
    for (let i = 0; i <=6; i++) {
        let tempElement = document.getElementById(`temp-${i}`);
        tempElement.innerText = `${data.mintemps_c[i]}° ${data.maxtemps_c[i]}°`
    }
}

export { getInputData, handleClick, displayData }