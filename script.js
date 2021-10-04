"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  let text = document.querySelector("#coolText").textContent;
  console.log(text);
  //   text.replace(" ", "+");

  document.querySelector("h1").textContent = "";
  let letterArr = text.split("");

  console.log(letterArr);
  let span = document.createElement("span");

  document.querySelector("h1").appendChild(span);

  letterArr.forEach((letter, i) => {
    let span = document.createElement("span");
    document.querySelector("h1").appendChild(span);
    span.textContent = letter;

    if (letter === " ") {
      const space = document.querySelector("span");
      let str = space.innerHTML;
      str += "&nbsp";
      console.log("letter");
      span.innerHTML = str;
    }
  });
  console.log(letterArr);

  document.querySelectorAll("span").forEach((elm, i) => {
    console.log(i);
    elm.classList.add("ani");
    elm.style.animationDelay = `${i / 100}s`;
  });
}
