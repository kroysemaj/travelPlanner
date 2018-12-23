const arctic = require("./monstersByTerrain/arctic.json");
const coast = require("./monstersByTerrain/coasts.json");
const desert = require("./monstersByTerrain/deserts.json");
const forest = require("./monstersByTerrain/forests.json");
const grassland = require("./monstersByTerrain/grasslands.json");
const hill = require("./monstersByTerrain/hills.json");
const mountain = require("./monstersByTerrain/mountains.json");
const swamp = require("./monstersByTerrain/swamps.json");
const underdark = require("./monstersByTerrain/underdark.json");
const underwater = require("./monstersByTerrain/underwater.json");
const urban = require("./monstersByTerrain/urban.json");
const chalk = require("chalk");

const terrainLists = {
  arctic,
  coast,
  desert,
  forest,
  grassland,
  hill,
  mountain,
  swamp,
  underdark,
  underwater,
  urban
};

const { terrain, days } = process.env;
const list = terrainLists[terrain.toLowerCase()];
const randomDigit = rollRandom(list.length);
const displayDay = chalk.cyanBright;
const log = console.log;

const itenerary = createIterneary(days, terrain);
displayResult(itenerary);

/* Functions */

function displayResult(itenerary) {
  itenerary.forEach(plan => {
    const { day, amPm, styleEncounter, encounter } = plan;
    const randomEncounter = encounter === null ? "Nothing" : encounter.name;
    log(
      `${displayDay(`DAY ${day} ${amPm}`)}: ${styleEncounter(randomEncounter)}`
    );
    if (encounter !== null) {
      const {
        name,
        size,
        type,
        tags,
        alignment,
        challenge,
        source
      } = encounter;
      log(`
      Encounter: ${name}
      Size: ${size}
      Type: ${type}
      Tags: ${tags !== "" ? tags : "none"}
      Alignment: ${alignment}
      Challenge: ${challenge}
      Source: ${source}
      `);
    }
  });
}

function createIterneary(days, terrain) {
  const travelDays = Array(days * 2)
    .fill()
    .map((_, i) => i + 1);

  const itenerary = travelDays.map(timeslot => {
    let day, amPm;
    if (timeslot % 2 !== 0) {
      day = Math.ceil(timeslot / 2);
      amPm = "AM";
    } else {
      day = timeslot / 2;
      amPm = "PM";
    }

    const encounter = rollEncounter(terrain);
    const styleEncounter =
      encounter === null ? chalk.yellowBright : chalk.redBright;

    return { day, amPm, encounter, styleEncounter };
  });

  return itenerary;
}

function rollEncounter(terrian) {
  let result = null;
  if (checkForEncounter()) {
    result = list[rollRandom(list.length)];
  }
  return result;
}

function rollRandom(max, min = 0) {
  return Math.floor(Math.random() * max) + min;
}

function checkForEncounter() {
  return rollRandom(12, 1) === 12;
}
