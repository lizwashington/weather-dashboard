var button = document.querySelector(".button");
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('desc');
var temp = document.querySelector('.temp');
var searchHistory = document.querySelector('#searchHistory');
var cities = [];

// Local Storage
var callCities = function () {
    cities = JSON.parse(localStorage.getItem("cities"))

    // For Loop - Create Search History
    for (var i = 0; i < cities.length; i++) {
        var list = document.createElement("li");
        list.textContent = cities[i];
        searchHistory.appendChild(list);
    }
};

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=403f69cea330b6713e726d6736d05afc')
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })
        .catch(err => alert("Could not locate that city!"))
});

// Clear Local Storage History
var clearHist = function (event) {
    localStorage.clear();
};

// Five Day Weather Forecast
// var forecast = function ()

callCities;