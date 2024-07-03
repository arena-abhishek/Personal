const display = document.getElementById("display");
const button = document.querySelectorAll("button");
let funcbtn = document.querySelector(".funcbtn");
let cont = document.querySelector("#container");
let btn = document.querySelector(".btn");
let calbtn = document.querySelector(".calbtn");
// let input = document.getElementById("screen");
let mod = document.getElementById("mod");
let body = document.querySelector("body");
let moon = document.getElementById("mod").firstElementChild;
let sun = document.getElementById("mod").lastElementChild;
let string = "";

button.forEach((calci) => {
  calci.addEventListener("click", (e) => {
    num = e.target.innerText;
    display.value += num;

    if (num == "Ac") {
      string = "";
      display.value = string;
    } else if (num == "Sqrt") {
      string = Math.sqrt(string);
      display.value = string;
    } else if (num == "=") {
      string = eval(string.replace("%","/100"));
      display.value = string;
    } else if ((num == "Del")) {
      string = string.slice(0, -1);
      display.value = string;
    }
    else {
      string += num;
      display.value = string;
    }
  });
});


mod.addEventListener('click', ()=>{
    if(body.style.backgroundColor != "black"){
        body.style.backgroundColor = "black";
        cont.style.backgroundColor = "black";
        display.style.backgroundColor = "black";
        display.style.Color = "#f1f0f7";
        btn.style.backgroundColor = "#2f3035";
        funcbtn.style.backgroundColor = "#a3b1e0";
        funcbtn.style.Color = "#181820";
        calbtn.style.backgroundColor = "#aac7ff";
        btn.style.Color = "white";
        cont.style.boxShadow = "-5px -3px 10px grey inset";
        display.style.boxShadow = "-5px -3px 10px grey inset ";
        button.style.boxShadow = "-5px -3px 10px grey inset ";
        moon.style.display = "none";
        sun.style.display = "block";
    }
    else{
        body.style.backgroundColor = "#f1f0f7";
        cont.style.backgroundColor = "#f1f0f7";
        display.style.backgroundColor = "#f1f0f7";
        display.style.Color = "black";
        btn.style.backgroundColor = "#f1f0f7";
        funcbtn.style.backgroundColor = "#dce1fc";
        funcbtn.style.Color = "#3f5e95";
        calbtn.style.backgroundColor = "#3f5e95";
        cont.style.boxShadow = "-5px -3px 10px grey inset";
        display.style.boxShadow = "-5px -3px 10px grey inset ";
        button.style.boxShadow = "-5px -3px 10px grey inset ";
        moon.style.display = "block";
        sun.style.display = "none";
    }
})
