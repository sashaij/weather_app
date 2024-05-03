import './styles/main.scss';
import getWeatherData from './weatherData';
import { getInputData, handleClick } from './ui';


const submitButton = document.getElementById('submit-button');

function getWeather () {
    let inputData;
        inputData = getInputData();
        console.log(inputData);
        getWeatherData(inputData);
}

submitButton.addEventListener('click', handleClick)
submitButton.addEventListener('click', getWeather)

