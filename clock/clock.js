let hourHand = document.getElementById("hourhand");
let minHand = document.getElementById("minhand");
let secHand = document.getElementById("sechand");
let hhDisplay = document.getElementById("hh");
let mmDisplay = document.getElementById("mm");
let ssDisplay = document.getElementById("ss");


  let intervalId = setInterval(() => {
    let now = new Date();
    let minutes = now.getMinutes() * 6;
    let seconds = now.getSeconds() * 6;
    let hours = now.getHours() * 30 + Math.round(minutes / 12);

    minHand.style.transform = `rotate(${minutes}deg)`;
    secHand.style.transform = `rotate(${seconds}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;

    let hoursDisplay = now.getHours();
    let minutesDisplay = now.getMinutes();
    let secondsDisplay = now.getSeconds();

    hoursDisplay = hoursDisplay < 10 ? "0" + hoursDisplay : hoursDisplay;
    minutesDisplay = minutesDisplay < 10 ? "0" + minutesDisplay : minutesDisplay;
    secondsDisplay = secondsDisplay < 10 ? "0" + secondsDisplay : secondsDisplay;

    hhDisplay.innerHTML = hoursDisplay;
    mmDisplay.innerHTML = minutesDisplay;
    ssDisplay.innerHTML = secondsDisplay;
  }, 1000);

