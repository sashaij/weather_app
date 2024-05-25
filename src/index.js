import './styles/main.scss';
import { getWeatherData } from './weatherData.js';
import { getInputData, handleClick } from './data_ui.js';
import weather from './assets/weather-news.png'
import { getWeekDay, arrangeDays } from './time_ui.js';
import { renderForecastHourly } from './general_ui.js';


const addImages = function () {
    const logoImage = document.getElementById('logo-img');

    logoImage.src = weather;
}

const submitButton = document.getElementById('submit-button');

function getWeather () {
    let inputData;
        //get city name
        inputData = getInputData();


        getWeatherData(inputData)
}

//prevent form from submit
submitButton.addEventListener('click', handleClick);
submitButton.addEventListener('click', getWeather);

renderForecastHourly();

addImages();

getWeatherData('Sydney');

arrangeDays();

