import conditions from './data/locations';
import baseData from './data/baseData';
import axios from 'axios';

const locationName = document.getElementsByClassName('location-name');
const swell = document.getElementsByClassName('swell');
const wind = document.getElementsByClassName('wind');
const temp = document.getElementsByClassName('temp');
const locations = ['Ballina', 'Byron Bay', 'Shelly Beach'];

let conditionsOne = baseData;
let conditionsTwo = baseData;
let conditionsThree = baseData;
var homepage = require('./components/Home');
import {homepage} from './components/Home';

const home = document.querySelector('.homepage_body');

if (home) {
  home.onload = function() {
    Promise.all([
      axios.get("http://localhost:3000/locationOne"),
      axios.get("http://localhost:3000/locationTwo"),
      axios.get("http://localhost:3000/locationThree")
    ]).then((res) => {
      conditionsOne = res[0].data;
      conditionsTwo = res[1].data;
      conditionsThree = res[2].data;
      currentConditions([conditionsOne, conditionsTwo, conditionsThree])
    })
  }
}

let currentConditionsAll = [];

function currentConditions(allConditions) {
  let date = (Date.now()/1000);
  allConditions.forEach(function(locationConditions) {
    let currentCondition = locationConditions.filter(timeslot => timeslot.timestamp > date);
    currentConditionsAll.push(currentCondition[0]);
  })
  current(currentConditionsAll);
}

function current(location) {
  if (location.length > 0) {
    for (var i = 0; i < location.length; i++) {
      locationName[i].innerText = locations[i];

      swell[i].innerHTML = `<h4>Min Swell: ${location[i].swell.minBreakingHeight}     ${location[i].swell.unit}</h4><h4>Max Swell: ${location[i].swell.maxBreakingHeight} ${location[i].swell.unit}</h4><h4>Swell Direction: ${location[i].swell.components.combined.compassDirection}</h4>`;

      wind[i].innerHTML = `<h4>Wind Speed: ${location[i].wind.speed} ${location[i].wind.unit}</h4><h4>Direction: ${location[i].wind.compassDirection}`;

      temp[i].innerHTML = `<h4>Temperature: ${location[i].condition.temperature} ${location[i].condition.unit}</h4>`;
    }
  }
}
