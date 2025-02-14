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

  // New elements
  const blowKissBtn = document.getElementById("blowKissBtn");
  const hugBtn = document.getElementById("hugBtn");
  const writeNoteBtn = document.getElementById("writeNoteBtn");
  const noteModal = document.getElementById("noteModal");
  const sendNote = document.getElementById("sendNote");
  const loveNote = document.getElementById("loveNote");

  // Add event listeners
  kissButton.addEventListener("click", sendKiss);
  container.addEventListener("touchstart", handleTouchStart);
  container.addEventListener("touchend", handleTouchEnd);
  container.addEventListener("mousedown", handleTouchStart);
  container.addEventListener("mouseup", handleTouchEnd);
  window.addEventListener("devicemotion", handleShake);
  blowKissBtn.addEventListener("click", createBlowKissEffect);
  hugBtn.addEventListener("click", createBigHugEffect);
  writeNoteBtn.addEventListener("click", () => showModal(noteModal));
  sendNote.addEventListener("click", sendLoveNote);

  // Add at the start of the file
  const vibrateDevice = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  // Handle kiss button click
  function sendKiss() {
    vibrateDevice();
    lips.style.opacity = "1";
    lips.classList.add("animate__bounceIn");
    
    // Add touch feedback animation
    kissButton.classList.add('button-pressed');
    setTimeout(() => kissButton.classList.remove('button-pressed'), 200);

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
    if (e.type === 'touchstart') {
      e.preventDefault();
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }
    touchStartTime = Date.now();
    touchTimeout = setTimeout(() => {
      vibrateDevice();
      showHugAnimation();
    }, 800);
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

  function createBlowKissEffect() {
    vibrateDevice();
    const kiss = document.createElement("div");
    kiss.innerHTML = "💋";
    kiss.style.position = "fixed";
    kiss.style.fontSize = "2em";
    kiss.style.left = "50%";
    kiss.style.bottom = "20%";
    kiss.style.transform = "translateX(-50%)";
    kiss.style.transition = "all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)";
    document.body.appendChild(kiss);

    requestAnimationFrame(() => {
      kiss.style.transform = "translateX(-50%) translateY(-100vh) scale(2)";
      kiss.style.opacity = "0";
    });

    setTimeout(() => kiss.remove(), 1500);
    playHeartbeatSound();
  }

  function createBigHugEffect() {
    vibrateDevice();
    const hug = document.createElement("div");
    hug.innerHTML = "🤗";
    hug.style.position = "fixed";
    hug.style.fontSize = "8em";
    hug.style.top = "50%";
    hug.style.left = "50%";
    hug.style.transform = "translate(-50%, -50%)";
    hug.classList.add("animate__animated", "animate__heartBeat");
    document.body.appendChild(hug);

    const hearts = ["❤️", "💖", "💝", "💕"];
    for (let i = 0; i < 8; i++) {
      createFloatingHeart(hearts[Math.floor(Math.random() * hearts.length)]);
    }

    setTimeout(() => hug.remove(), 2000);
    playHeartbeatSound();
  }

  function createFloatingHeart(heart) {
    const heartEl = document.createElement("div");
    heartEl.innerHTML = heart;
    heartEl.style.position = "fixed";
    heartEl.style.fontSize = "2em";
    heartEl.style.left = `${50 + (Math.random() * 40 - 20)}%`;
    heartEl.style.top = "50%";
    heartEl.style.transition = "all 2s cubic-bezier(0.165, 0.84, 0.44, 1)";
    document.body.appendChild(heartEl);

    requestAnimationFrame(() => {
      heartEl.style.transform = `translate(${Math.random() * 100 - 50}px, ${-Math.random() * 200}px)`;
      heartEl.style.opacity = "0";
    });

    setTimeout(() => heartEl.remove(), 2000);
  }

  function sendLoveNote() {
    if (loveNote.value.trim()) {
      const note = document.createElement("div");
      note.className = "love-message animate__animated animate__fadeInUp";
      note.textContent = loveNote.value;
      loveMessage.parentNode.insertBefore(note, loveMessage);
      
      hideModal(noteModal);
      loveNote.value = "";
      playHeartbeatSound();
    }
  }

  function playHeartbeatSound() {
    const heartbeat = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-quick-win-video-game-notification-269.mp3");
    heartbeat.volume = 0.3;
    heartbeat.play().catch(e => console.log("Sound play prevented:", e));
  }

  // Close modal when clicking outside
  noteModal.addEventListener("click", (e) => {
    if (e.target === noteModal) {
      hideModal(noteModal);
    }
  });

  // Add smooth scrolling for mobile
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.95)';
    });
    button.addEventListener('touchend', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Add smooth touch interactions
  document.querySelectorAll('.action-button, .glow-button').forEach(button => {
    button.addEventListener('touchstart', function(e) {
      e.preventDefault();
      vibrateDevice();
      this.classList.add('button-pressed');
    });
    
    button.addEventListener('touchend', function() {
      this.classList.remove('button-pressed');
    });
  });

  // Add to the existing code
  function showModal(modal) {
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
      modal.classList.add('show');
    });
  }

  function hideModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }

  // Add touch gesture handling
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });

  document.addEventListener('touchmove', (e) => {
    if (!touchStartX || !touchStartY) return;

    const touchEndX = e.touches[0].clientX;
    const touchEndY = e.touches[0].clientY;
    
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;

    // Swipe down to dismiss modal
    if (deltaY < -50 && Math.abs(deltaX) < 30) {
      const visibleModal = document.querySelector('.modal[style*="display: flex"]');
      if (visibleModal) {
        hideModal(visibleModal);
      }
    }
  });
});
