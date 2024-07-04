const result = document.getElementById("result");
const display = document.getElementById("display");
const button = document.querySelectorAll("button");
let container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const funcbtn = document.querySelector(".funcbtn");
let calbtn = document.querySelector(".calbtn");
const mod = document.querySelector(".mod");
let body = document.querySelector("body");
let moon = document.querySelector(".mod").firstElementChild;
let sun = document.querySelector(".mod").lastElementChild;

let string = "";

button.forEach((calci) => {
  calci.addEventListener("click", (e) => {
    num = e.target.innerText;
    display.value += num;

    if (num == "Ac") {
      string = "";
      display.value = string;
    } else if (num == "Sqr") {
      string = Math.sqrt(string);
      display.value = string;
    } else if (num == "=") {
      // if(num == "&divide;" && num == "&times;"){}
      string = eval(string.replace("%", "/100"));
      display.value = string;
    } else if (num == "C") {
      string = string.slice(0, -1);
      display.value = string;
    }
    // else if(num == "&divide;"){
    //   num = "/"
    // }
    // else if(num == "&times;"){
    //   num = "*"
    // }
     else {
      string += num;
      display.value = string;
    }
  });
});
 
let isDark = true;
mod.onclick = () => {
  if(body.style.background != "white"){
    body.style.background = "white"
  }
  else{
    body.style.background = "black"
  }
  container.classList.toggle("dark");
  mod.classList.toggle("active");
  isDark = !isDark;
};


