"use strict";
let add = document.querySelector(".addtd");
let todocontainer = document.querySelector(".container");
let input = document.querySelector(".inputfield");

let x = add.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  todocontainer.appendChild(paragraph);
  input.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

x;
