"use strict";

let myInput;
let myString;

document.querySelector("button").addEventListener("click", generate);
const options = document.querySelector("#options");
const inputBox = document.querySelector("#myInput");
const outputBox = document.querySelector("#myOutput");

function generate() {
  console.log("generate option");
  myInput = inputBox.value;
  outputBox.value = "";

  if (options.value === "opt1") {
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt2") {
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt3") {
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt4") {
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt5") {
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt6") {
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt7") {
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt8") {
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  showResult();
}

function showResult() {
  console.log(myString);
  outputBox.value = myString;
}
