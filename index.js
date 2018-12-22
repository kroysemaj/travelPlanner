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
const list = terrainLists[terrain];
const randomDigit = rollRandom(list.length);
const randomMonster = list[randomDigit];

console.log(chalk.red("Hello world!"));

function rollRandom(max, min = 0) {
  return Math.floor(Math.random() * max) + min;
}

function checkForEncounter() {
  return rollRandom(12, 1);
}
