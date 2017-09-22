import conditions from './data/locations';
import baseData from './data/baseData';

// const surfForecast = document.querySelector('.surf-forecast');
// const location = document.querySelector('.surf-conditions');

const swell = document.getElementsByClassName('swell');
const wind = document.getElementsByClassName('wind');
const temp = document.getElementsByClassName('temp');

const conditionsOne = baseData;
const conditionsTwo = baseData;
const conditionsThree = baseData;



if (conditions.length > 0) {
  for (var i = 0; i < conditions.length; i++) {
    swell[i].innerHTML = `<h4>Min Swell: ${conditions[i].swell.minBreakingHeight} ${conditions[i].swell.unit}</h4><h4>Max Swell: ${conditions[i].swell.maxBreakingHeight} ${conditions[i].swell.unit}</h4><h4>Swell Direction: ${conditions[i].swell.components.combined.compassDirection}</h4>`;

    wind[i].innerHTML = `<h4>Wind Speed: ${conditions[i].wind.speed} ${conditions[i].wind.unit}</h4><h4>Direction: ${conditions[i].wind.compassDirection}`;

    temp[i].innerHTML = `<h4>Temperature: ${conditions[i].condition.temperature} ${conditions[i].condition.unit}</h4>`;
  }
}

// TODO: call above fucntion only on home page
