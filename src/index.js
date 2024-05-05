import './styles/main.scss';
import { getWeatherData } from './weatherData';
import { getInputData, handleClick } from './ui';



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

