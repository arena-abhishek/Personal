function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
  console.log(this);
}

function playingsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const kys = Array.from(document.querySelectorAll(".key"));
kys.forEach((key) => {key.addEventListener("transitionend", removeTransition)});
window.addEventListener("keydown", playingsound);
