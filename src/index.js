import './styles/main.scss';
import { getWeatherData } from './weatherData';
import { getInputData, handleClick } from './ui';
import weather from './assets/weather-news.png'
import { getWeekDay, arrangeDays } from './time';


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
submitButton.addEventListener('click', handleClick)
submitButton.addEventListener('click', getWeather)

addImages();

getWeatherData('London');


arrangeDays();

