import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const div = document.querySelector("#text");
const fruits = ["apple", "banana", "cantelop", "dragonfruit", "fig"];

window.onload = function() {
  const helloBtn = document.querySelector("#helloBtn");
  const deleteBtn = document.querySelector("#deleteBtn");
  const randomNumBtn = document.querySelector("#randomNumBtn");
  const enterFruitBtn = document.querySelector("#enterFruitBtn");
  helloBtn.addEventListener("click", helloWorld)
  deleteBtn.addEventListener("click", deleteHelloWorld)
  randomNumBtn.addEventListener("click", getRandomFruit)
  enterFruitBtn.addEventListener("click", addToFruitArray)
};

const helloWorld = () => {
  div.innerHTML = "Hello World";
} 
const deleteHelloWorld = () => {
  div.innerHTML = "";
} 

const getRandomFruit = () => {
  let randomNumber = Math.floor(Math.random() * fruits.length);
  div.innerHTML = fruits[randomNumber];
}

const addToFruitArray = () => {
  const input = document.querySelector("#fruitInput").value;
  console.log(input, "INPUT")
  fruits.push(input);
  console.log(fruits);
}
