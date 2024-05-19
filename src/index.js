import './styles/main.scss';
import { getWeatherData } from './weatherData';
import { getInputData, handleClick } from './ui';
import weather from './assets/weather-news.png'


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

const today = new Date;
console.log('current date: ');
console.log(today.getDay());
console.log(today);




//takes week day index
//returns week day name 
//according index
const getWeekDay = function (weekDayIndx) {
    
    let weekDaySwitch;


    switch(weekDayIndx) {
        case 0:
            weekDaySwitch = 'Sunday';
            break;
        case 1:
            weekDaySwitch = 'Monday';
            break;
        case 2:
            weekDaySwitch = 'Tuesday'
            break;
        case 3:
            weekDaySwitch = 'Wednesday';
            break;
        case 4:
            weekDaySwitch = 'Thursday';
            break;
        case 5:
            weekDaySwitch = 'Friday';
            break;
        case 6:
            weekDaySwitch = 'Saturday';
            break;
    }

    return weekDaySwitch;
}


function arrangeDays () {

    const dayOne = document.getElementById('name-one');
    const dayTwo = document.getElementById('name-two');
    const dayThree = document.getElementById('name-three');
    const dayFour = document.getElementById('name-four');
    const dayFive = document.getElementById('name-five');
    const daySix = document.getElementById('name-six');
    const daySeven = document.getElementById('name-seven');

    //week day names
    //starting with current day
    let week = [];
    
    //gets current week day index
    let currentWeekDay = today.getDay();


    //define week day name with
    //'getWeekDay' function

    //push week day names into 'week'
    //array starting with current
    //week day
    for (let i = 0; i <= 6; i++) {
        if (currentWeekDay > 6) {
            currentWeekDay = 0 
        } 
        let nextDay = getWeekDay(currentWeekDay);
        console.log('next day:');
        console.log(nextDay);
        week.push(nextDay);
        currentWeekDay++;
    }
    console.log(week);

    //assign week day names
    //for a week 
    //starting with a current 
    //week day
    dayOne.innerText = week[0]; //current week day
    dayTwo.innerText = week[1];
    dayThree.innerText = week[2];
    dayFour.innerText = week[3];
    dayFive.innerText = week[4];
    daySix.innerText = week[5];
    daySeven.innerText = week[6];
}

arrangeDays();

/* 
- start with getday
- for the rest of the days add one (++)
- if counter is more than 6 than start with 0
- 
*/

getWeekDay();

