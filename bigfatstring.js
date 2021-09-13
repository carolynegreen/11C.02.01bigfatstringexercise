"use strict";

let myInput;
let myResult;

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
    myResult =
      myInput.charAt(0).toUpperCase() + myInput.substring(1).toLowerCase();
  }
  if (options.value === "opt2") {
    //If input is a full name: Find the first name
    myResult = myInput.split(" ")[0];
  }
  if (options.value === "opt3") {
    //If input is a full name: Find the length of the first name
    myResult = myInput.split(" ")[0].length;
  }
  if (options.value === "opt4") {
    //If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
    myResult = myInput.substring(
      myInput.indexOf(" ") + 1,
      myInput.lastIndexOf(" ")
    );
  }
  if (options.value === "opt5") {
    //If input is a filename: Check if a filename is .png or .jpg
    myResult = myInput.substring(
      myInput.indexOf(" ") + 1,
      myInput.lastIndexOf(" ")
    );
  }
  showResult();
}

function showResult() {
  console.log(myResult);
  outputBox.value = myResult;
}
