
function renderForecastHourly () {
    
    let hourlyForecastCont = document.getElementById('forecast-hourly'); 
    
    for (let i=0; i<=23; i++) {
        //container for each hour 
        const hourlyContElem = document.createElement('div'); 
        //display hour value
        const hourElem = document.createElement('div');
        //condition icon
        const hourCondIcon = document.createElement('img');
        //temperature
        const hourTemp = document.createElement('div');

        hourlyContElem.classList.add('fore-hour');
        hourElem.classList.add('fore-hour-value');
        hourCondIcon.classList.add('fore-cond-img');
        hourTemp.classList.add('fore-temp');

        hourlyContElem.setAttribute('id', `hourly-cont-${i}`);
        hourElem.setAttribute('id', `hour-val-${i}`);
        hourCondIcon.setAttribute('id', `hour-cond-icon-${i}`);
        hourTemp.setAttribute('id', `hour-temp-${i}`);

        hourlyContElem.appendChild(hourElem);
        hourlyContElem.appendChild(hourCondIcon);
        hourlyContElem.appendChild(hourTemp);
        
        hourlyForecastCont.appendChild(hourlyContElem);
    }
}

export { renderForecastHourly }