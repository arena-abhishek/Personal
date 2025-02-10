document.addEventListener("DOMContentLoaded", () => {
  // Initialize elements
  const container = document.querySelector(".container");
  const kissButton = document.getElementById("kissButton");
  const loveMessage = document.getElementById("loveMessage");
  const secretMessage = document.getElementById("secretMessage");
  const lips = document.querySelector(".lips");
  const daysCount = document.getElementById("daysCount");
  const music = document.getElementById("softMusic");

  // Create rose petals
  const rosePetals = document.querySelector(".rose-petals");
  for (let i = 0; i < 30; i++) {
    createRosePetal();
  }

  // Calculate days together (example date - modify as needed)
  const startDate = new Date("2024-09-01");
  const today = new Date();
  const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  daysCount.textContent = days;

  // Secret messages array
  const secretMessages = [
    "Every time I kiss you, I feel like I'm home.",
    "Your lips are my favorite place to be.",
    "If I could, I'd steal a thousand kisses from you right now.",
    "Your kisses make my heart skip a beat.",
    "One kiss from you is all it takes to make my day perfect.",
  ];

  // Initialize touch tracking
  let touchStartTime = 0;
  let touchTimeout;

  // Add event listeners
  kissButton.addEventListener("click", sendKiss);
  container.addEventListener("touchstart", handleTouchStart);
  container.addEventListener("touchend", handleTouchEnd);
  container.addEventListener("mousedown", handleTouchStart);
  container.addEventListener("mouseup", handleTouchEnd);
  window.addEventListener("devicemotion", handleShake);

  // Handle kiss button click
  function sendKiss() {
    lips.style.opacity = "1";
    lips.classList.add("animate__bounceIn");

    setTimeout(() => {
      loveMessage.style.opacity = "1";
      loveMessage.classList.add("animate__fadeInUp");
      showRandomSecret();
    }, 1000);

    // Play soft music
    try {
      music.play().catch((e) => console.log("Auto-play prevented:", e));
    } catch (e) {
      console.log("Music playback error:", e);
    }
  }

  // Show random secret message
  function showRandomSecret() {
    const message =
      secretMessages[Math.floor(Math.random() * secretMessages.length)];
    secretMessage.textContent = message;
    secretMessage.style.opacity = "1";
    secretMessage.classList.add("animate__fadeIn");
  }

  // Handle touch/hold events
  function handleTouchStart(e) {
    e.preventDefault();
    touchStartTime = Date.now();
    touchTimeout = setTimeout(() => {
      showHugAnimation();
    }, 1000);
  }

  function handleTouchEnd() {
    clearTimeout(touchTimeout);
    if (Date.now() - touchStartTime < 1000) {
      createFloatingKiss(event);
    }
  }

  // Create floating kiss animation
  function createFloatingKiss(event) {
    const kiss = document.createElement("div");
    kiss.innerHTML = "💋";
    kiss.style.position = "absolute";
    kiss.style.fontSize = "2em";
    kiss.style.left = `${event.clientX || event.touches[0].clientX}px`;
    kiss.style.top = `${event.clientY || event.touches[0].clientY}px`;
    kiss.style.transition = "all 1s ease-out";
    document.body.appendChild(kiss);

    requestAnimationFrame(() => {
      kiss.style.transform = `translate(${
        Math.random() * 200 - 100
      }px, -100px)`;
      kiss.style.opacity = "0";
    });

    setTimeout(() => kiss.remove(), 1000);
  }

  // Show hug animation
  function showHugAnimation() {
    const hug = document.createElement("div");
    hug.innerHTML = "🤗";
    hug.style.position = "fixed";
    hug.style.top = "50%";
    hug.style.left = "50%";
    hug.style.transform = "translate(-50%, -50%)";
    hug.style.fontSize = "5em";
    hug.classList.add("animate__animated", "animate__heartBeat");
    document.body.appendChild(hug);

    setTimeout(() => hug.remove(), 1500);
  }

  // Handle phone shake
  let lastShake = 0;
  const SHAKE_THRESHOLD = 15;

  function handleShake(event) {
    const now = Date.now();
    if (now - lastShake < 1000) return;

    const acceleration = event.accelerationIncludingGravity;
    if (!acceleration) return;

    const x = acceleration.x;
    const y = acceleration.y;
    const z = acceleration.z;

    const acceleration_magnitude = Math.sqrt(x * x + y * y + z * z);

    if (acceleration_magnitude > SHAKE_THRESHOLD) {
      lastShake = now;
      createShakeEffect();
    }
  }

  // Create shake effect
  function createShakeEffect() {
    const lipstickKiss = document.createElement("div");
    lipstickKiss.innerHTML = "💋";
    lipstickKiss.style.position = "fixed";
    lipstickKiss.style.fontSize = "8em";
    lipstickKiss.style.top = "50%";
    lipstickKiss.style.left = "50%";
    lipstickKiss.style.transform = "translate(-50%, -50%)";
    lipstickKiss.classList.add("animate__animated", "animate__rubberBand");
    document.body.appendChild(lipstickKiss);

    setTimeout(() => lipstickKiss.remove(), 2000);
  }

  // Create rose petal
  function createRosePetal() {
    const petal = document.createElement("div");
    petal.classList.add("rose-petal");
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 10}s`;
    rosePetals.appendChild(petal);

    petal.addEventListener("animationend", () => {
      petal.remove();
      createRosePetal();
    });
  }
});
