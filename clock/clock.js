let hour = document.getElementById("hourhand");
let min = document.getElementById("minhand");
let sec = document.getElementById("sechand");
let hh = document.querySelector("#hh");
let mm = document.querySelector("#mm");
let ss = document.querySelector("#ss");

setInterval(() => {
  // console.log('abhishek')
  let d = new Date();
  let mtime = d.getMinutes() * 6;
  let stime = d.getSeconds() * 6;
  let htime = d.getHours() * 30 + Math.round(mtime / 2);
  min.style.transform = `rotate(${mtime}deg);`;
  sec.style.transform = `rotate(${stime}deg);`;
  hour.style.transform = `rotate(${htime}deg);`;

  // digital clock
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  // add zero to single digit numbers
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hh.innerHTML = hours;
  mm.innerHTML = minutes;
  ss.innerHTML = seconds;
}, 1000);
