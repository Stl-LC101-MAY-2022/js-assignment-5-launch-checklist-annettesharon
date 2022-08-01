// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
                const missionTarget = document.getElementById("missionTarget");
                missionTarget.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${json[Number(pickPlanet(planetsReturned))].name}</li>
                   <li>Diameter: ${json[Number(pickPlanet(planetsReturned))].diameter}</li>
                   <li>Star: ${json[Number(pickPlanet(planetsReturned))].star}</li>
                   <li>Distance from Earth: ${json[Number(pickPlanet(planetsReturned))].distance}</li>
                   <li>Number of Moons: ${json[Number(pickPlanet(planetsReturned))].moons}</li>
                </ol>
                <img src="${json[Number(pickPlanet(planetsReturned))].image}">`
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return `Empty`
    } else if ((!isNaN(Number(testInput)))) {
        return `Is a Number`
    } else {
        return 'Not a Number'
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    if (validateInput(pilotInput) === `Empty`|| validateInput(copilotInput) === `Empty`|| 
    validateInput(fuelLevelInput) === `Empty`||validateInput(cargoMassInput) === `Empty`) {
        alert(`All fields are required`);
    }
    else if (validateInput(fuelLevelInput) === 'Not a Number' || validateInput(cargoMassInput) === 'Not a Number') {
        alert(`Please enter numerical values for Fuel Level and Cargo Mass`);
    } else if (validateInput(pilotInput)===`Is a Number`||validateInput(copilotInput)===`Is a Number`) {
        alert('Please do not enter numbers for name of pilot or co-pilot');
    } 
    else {
        // pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        // copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
        // list.style.visibility = 'hidden';
        updateShuttle(e, pilotName, copilotName, fuelLevel, cargoMass);
    }
}

function updateShuttle(e, pilotName, copilotName, fuelLevel, cargoMass) {
    const launchStatus = document.querySelector("#launchStatus");
    const faultyItems = document.querySelector("#faultyItems");
    const pilotStatus = document.querySelector("#pilotStatus");
    const copilotStatus = document.querySelector("#copilotStatus");
    const fuelStatus = document.querySelector("#fuelStatus");
    const cargoStatus = document.querySelector("#cargoStatus");
 
    pilotStatus.innerHTML = `Pilot ${pilotName}, Ready.`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName}, Ready`;
 
    if (fuelLevel >= 10000 && cargoMass <= 10000) {
       faultyItems.style.visibility = 'hidden';
       launchStatus.innerHTML = `Shuttle is ready for launch`;
       launchStatus.style.color = `green`;
    }
    else {
       faultyItems.style.visibility = 'visible';
       launchStatus.innerHTML = `Shuttle not ready for launch`;
       launchStatus.style.color = `red`;
       fuelStatus.innerHTML = (fuelLevel < 10000) ? `Not enough fuel for the journey` : `Fuel level high enough for launch`;
       cargoStatus.innerHTML = (cargoMass > 10000) ? `There is too much mass for the shuttle to take off` : `Cargo mass low enough for launch`;
    }
 }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function (json) {
            pickPlanet(planetsReturned);
    });

    return pickPlanet(planetsReturned);;
});
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;