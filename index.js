const yellow = document.querySelectorAll(".yellow");
const brown = document.querySelectorAll(".brown");
const box1 = document.querySelectorAll(".box1");
const box = document.querySelectorAll(".box");
const btnAll = document.querySelectorAll(".btn");
const start = document.querySelector(".start");
const wow = document.querySelector(".wow");
const back = document.querySelector(".back");
const span = document.querySelector("span");
const h2 = document.querySelector("h2");

start.addEventListener("click", () => {
  box.forEach((e, index) => {
    setTimeout(() => {
      e.style.transform = "translateY(300px)";

      span.innerText = `NO:${cal++}`;

      setTimeout(() => {
        wow.innerHTML = `<img src='./gifimage.gif'>`;
      }, 12500);
    }, index * 500);
  });
});
let cal = 0;
back.addEventListener("click", () => {
  wow.innerHTML = "";
  box.forEach((e, index) => {
    setTimeout(() => {
      span.innerText = `NO:0`;
      e.style.transform = "translateY(0)";
    }, index * 200);
  });
});
