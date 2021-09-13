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
    //If input is a first name: Make the first character in a name uppercase, and the rest lowercase
    myInput = myInput.toLowerCase();
    myString =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt2") {
    //If input is a full name: Find the first name
    myString = myInput.split(" ")[0];
  }
  if (options.value === "opt3") {
    //If input is a full name: Find the length of the first name
    myString = myInput.split(" ")[0];
  }
  showResult();
}

function showResult() {
  console.log(myString);
  outputBox.value = myString;
}
