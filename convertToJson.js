let csvToJson = require("convert-csv-to-json");

let fileInputName = "urban.csv";
let fileOutputName = "urban.json";

csvToJson
  .fieldDelimiter(",")
  .generateJsonFileFromCsv(fileInputName, fileOutputName);
