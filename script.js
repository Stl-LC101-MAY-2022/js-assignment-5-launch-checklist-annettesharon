// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

//import formSubmission from './scriptHelper.js';
// import { formSubmission } from './scriptHelper.js';
// const require = createRequire(import.meta.url);
//import _ from 'lodash';
//import { formSubmission } from './scriptHelper.js';
//const formSubmission = require('formSubmission');

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        //List DOM
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');

        //use formsubmission to validate and update list
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    })
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   //console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       //let random = pickPlanet(listedPlanets);
       let planet = pickPlanet(listedPlanets);
       //console.log(planet);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let imageUrl = planet.image;
       let moons = planet.moons;
       //console.log(name,diameter,star);

    //    let name = listedPlanets[random].name;
    //    let diameter = listedPlanets[random].diameter;
    //    let star = listedPlanets[random].star;
    //    let distance = listedPlanets[random].distance;
    //    let imageUrl = listedPlanets[random].image;
    //    let moons = listedPlanets[random].moons;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })
  
   
//       const button = document.getElementById("formSubmit");

//    button.addEventListener("click", function() {
//     const inputs = Array.from(document.getElementsByTagName('input'));
//     formSubmission(inputs);
//    })
});



