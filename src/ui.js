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

export { getInputData, handleClick }