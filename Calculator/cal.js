// let button = document.getElementsByClassName("button");
let input = document.getElementById("screen");
// let mod = document.getElementById("mod");
// let body = document.querySelector("body");
// let moon = document.getElementById("btn").firstElementChild;
// let sun = document.getElementById("btn").lastElementChild;

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

// mod.addEventListener("click", () => {
//   if (body.style.background != "black") {
//     body.style.background = "black";
//     button.style.color = "white";
//     moon.style.display = "none";
//     sun.style.display = "block";
//   }
//   else{
    
//   }
// });
