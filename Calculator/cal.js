let button = document.querySelector(".button");
let funcbtn = document.querySelector(".button.funcbtn")
let calbtn = document.querySelector(".calbtn")
let input = document.getElementById("screen");
let mod = document.getElementById("mod");
let body = document.querySelector("body");
let moon = document.getElementById("mod").firstElementChild;
let sun = document.getElementById("mod").lastElementChild;


function valuebtn(e) {
  input.value += e.value;
}
function cancel() {
  input.value = "";
}
function del() {
  alert("work in progress!");
}
function xyz() {
  alert("work in progress!");
}

function calculate() {
  input.value = eval(input.value);
}

mod.addEventListener("click", () => {
  if (body.style.background != "black") {
    body.style.background = "black";
    // button.style.color = "white";
    // funcbtn.style.color = "white";
    // calbtn.style.color = "white";
    input.style.color ="white"
    input.style.backgroundColor ="black"
    // button.style.background = "#2f3035";
    // funcbtn.style.background = "#2f3035";
    calbtn.style.background = "#aac7ff";
    moon.style.display = "none";
    sun.style.display = "block";
  }
  else{
    body.style.background = "#f1f0f7";
    // button.style.color = "black";
    // funcbtn.style.color = "white";
    // calbtn.style.color = "white";
    input.style.color ="black"
    input.style.backgroundColor ="#fdfbfe"
    // button.style.backgroundColor = "";
    // funcbtn.style.background = "red";
    calbtn.style.background = " #3f5e96";
    moon.style.display = "block";
    sun.style.display = "none";  
  }
});
