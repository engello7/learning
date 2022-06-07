'use strict';

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      wrapper = document.querySelector(".wrapper"),
      hearts = wrapper.querySelectorAll(".heart"),
      oneHeart = wrapper.querySelector(".heart");

//box.style.backgroundColor = "blue";
//box.style.width = "500px";
const widthBox = 500;
box.style.cssText = `background-color: blue; width: ${widthBox}px`;

btns[1].style.borderRadius = "100%";
circles[1].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "blue";
}

hearts.forEach(item => {
    item.style.backgroundColor = "grey";
});

const div = document.createElement("div");
// const text = document.createTextNode("Тут был я");

div.classList.add("black");
div.innerHTML = "<h1>Hello, World!</h1>";
// div.textContent = "Hello";


// document.body.append(div);
wrapper.append(div);
wrapper.prepend(div); //при этом будет один блок, append затрется

hearts[0].before(div); //тоже будет только один блок, prepend затрется
hearts[0].after(div); //тоже будет только один блок, before затрется

circles[0].remove();

hearts[0].replaceWith(circles[0]); // элемент заменяется на указанный в скобках, при этом указанный в скобках удаляется
div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
wrapper.insertBefore(div, hearts[0]);


