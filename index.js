// Code your solution in this file.
function lowerCaseDrivers(drivers, callback){
const newArray = [];
  for (const element of drivers){
    newArray.push(callback(element.toLowerCase()));
  }
}