const secondHand = document.querySelector('.secondhand');
const minsHand = document.querySelector('.minhand');
const hourHand = document.querySelector('.hourhand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

/* const secondHand = document.querySelector('.secondhand');
const minsHand = document.querySelector('.minhand');
const hourHand = document.querySelector('.hourhand');

let intervalId = setInterval(() => {
  let now = new Date();
  let minutes = now.getMinutes() * 6;
  let seconds = now.getSeconds() * 6;
  let hours = now.getHours() * 30 + (minutes / 12);
  minsHand.style.transform = `rotate(${minutes}deg)`;
  secondHand.style.transform = `rotate(${seconds}deg)`;
  hourHand.style.transform = `rotate(${hours}deg)`;
  console.log( hours, minutes);
}, 1000); */
