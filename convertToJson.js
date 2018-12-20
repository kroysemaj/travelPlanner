let csvToJson = require("convert-csv-to-json");

let fileInputName = "arctic.csv";
let fileOutputName = "arctic.json";

csvToJson
  .fieldDelimiter(",")
  .generateJsonFileFromCsv(fileInputName, fileOutputName);
