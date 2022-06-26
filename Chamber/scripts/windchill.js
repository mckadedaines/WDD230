// Grabs the info from the API

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5304391&appid=22569e3a1a6455138bbd985b0660d5fa";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);

    let f = (jsObject.main.temp - 273.15) * 1.8 + 32;
    document.querySelector('#current-temp').textContent = f.toFixed(2);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  };
getWeather();

// Calculates windchill temp

// let speed = 25;
// let temp = 10;

// function buildWC(speed, temp)
// {
//     let feelTemp = document.getElementById("feelTemp");

//     // Compute the windchill
//     let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
//     console.log(wc);

//     // Round the answer down to integer
//     wc = Math.floor(wc);

//     // If chill is greater than temp, return the temp
//     wc = (wc > temp) ? temp : wc;

//     // Display the windchill
//     console.log(wc);
//     // wc = "Feels like '+wc+'F";
//     feelTemp.innerHTML = wc;
// }

// buildWC(speed, temp);