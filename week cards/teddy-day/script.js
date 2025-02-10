document.addEventListener('DOMContentLoaded', () => {
    const teddy = document.querySelector('.teddy-container');
    const hugButton = document.getElementById('hugButton');
    const surpriseButton = document.getElementById('surpriseButton');
    const hiddenMessage = document.querySelector('.hidden-message');
    const toggleMusicButton = document.getElementById('toggleMusic');
    
    // Audio elements
    const bgMusic = document.getElementById('bgMusic');
    const giggleSound = document.getElementById('giggleSound');
    const heartSound = document.getElementById('heartSound');
    const hugSound = document.getElementById('hugSound');
    
    // Set initial volume
    bgMusic.volume = 0.3;
    giggleSound.volume = 0.4;
    heartSound.volume = 0.4;
    hugSound.volume = 0.4;

    const messages = [
        "Teddy bears are cute, but nothing is as adorable as you. You're my forever cuddle buddy! ",
        "This teddy may be virtual, but my love for you is as real as it gets! ",
        "You make my heart smile brighter than any teddy bear could! ",
        "Every day with you feels like a warm teddy bear hug! ",
        "Your love is softer than the softest teddy bear! ",
        "You're the sweetest teddy bear in my life! "
    ];
    let messageIndex = 0;

    // Music controls
    let isMusicPlaying = false;
    toggleMusicButton.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            toggleMusicButton.classList.remove('playing');
        } else {
            bgMusic.play();
            toggleMusicButton.classList.add('playing');
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Create floating hearts with different sizes and colors
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        const heart = document.createElement('div');
        const colors = ['#FF69B4', '#FF1493', '#FF6B6B', '#FF4D4D'];
        const size = Math.random() * 20 + 10;
        
        heart.innerHTML = '';
        heart.style.position = 'absolute';
        heart.style.fontSize = `${size}px`;
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.opacity = '0';
        heart.style.transform = 'rotate(0deg)';
        heart.style.transition = 'all 3s ease-in-out';
        heartsContainer.appendChild(heart);

        // Animate the heart
        setTimeout(() => {
            heart.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0.8';
        }, 100);

        // Remove the heart after animation
        setTimeout(() => {
            heartsContainer.removeChild(heart);
        }, 3000);
    }

    // Start creating hearts periodically
    setInterval(createFloatingHearts, 2000);

    // Calculate days together
    const startDate = new Date('2024-09-01');
    const today = new Date();
    const daysCount = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('daysCount').textContent = `${daysCount} days of love`;

    // Teddy interaction
    teddy.addEventListener('click', () => {
        teddy.classList.add('teddy-wave');
        if (giggleSound) {
            giggleSound.currentTime = 0;
            giggleSound.play();
        }
        createHeartBurst();
        setTimeout(() => {
            teddy.classList.remove('teddy-wave');
        }, 1000);
    });

    // Hug button functionality
    hugButton.addEventListener('click', () => {
        teddy.classList.add('teddy-hug');
        if (hugSound) {
            hugSound.currentTime = 0;
            hugSound.play();
        }
        createHeartBurst();
        setTimeout(() => {
            teddy.classList.remove('teddy-hug');
        }, 1000);
    });

    // Surprise button functionality
    surpriseButton.addEventListener('click', () => {
        const loveMessage = document.querySelector('.love-message');
        if (heartSound) {
            heartSound.currentTime = 0;
            heartSound.play();
        }
        loveMessage.style.opacity = '0';
        setTimeout(() => {
            loveMessage.textContent = messages[messageIndex];
            loveMessage.style.opacity = '1';
            messageIndex = (messageIndex + 1) % messages.length;
        }, 500);
        createHeartBurst();
    });

    // Create heart burst effect
    function createHeartBurst() {
        for (let i = 0; i < 15; i++) {
            setTimeout(createFloatingHearts, i * 100);
        }
    }

    // Mobile shake feature
    if (window.DeviceMotionEvent) {
        let lastUpdate = 0;
        let lastX, lastY, lastZ;
        const threshold = 15;

        window.addEventListener('devicemotion', (e) => {
            const current = e.accelerationIncludingGravity;
            const currentTime = new Date().getTime();
            const diffTime = currentTime - lastUpdate;

            if (diffTime > 100) {
                const deltaX = Math.abs(lastX - current.x);
                const deltaY = Math.abs(lastY - current.y);
                const deltaZ = Math.abs(lastZ - current.z);

                if (deltaX + deltaY + deltaZ > threshold) {
                    teddy.classList.add('teddy-wave');
                    if (giggleSound) {
                        giggleSound.currentTime = 0;
                        giggleSound.play();
                    }
                    createHeartBurst();
                    setTimeout(() => {
                        teddy.classList.remove('teddy-wave');
                    }, 1000);
                }

                lastX = current.x;
                lastY = current.y;
                lastZ = current.z;
                lastUpdate = currentTime;
            }
        });
    }

    // Hidden message feature
    let eyesClosed = false;
    let eyesClosedTimeout;

    document.addEventListener('mousemove', () => {
        clearTimeout(eyesClosedTimeout);
        if (eyesClosed) {
            hiddenMessage.style.display = 'none';
            eyesClosed = false;
        }
    });

    document.addEventListener('mousestop', () => {
        eyesClosedTimeout = setTimeout(() => {
            hiddenMessage.style.display = 'flex';
            eyesClosed = true;
            if (heartSound) {
                heartSound.currentTime = 0;
                heartSound.play();
            }
        }, 3000);
    });

    // Add random blinking
    function randomBlink() {
        const eyes = document.querySelectorAll('.eye-lid');
        eyes.forEach(eye => {
            eye.style.animation = 'none';
            eye.offsetHeight; // Trigger reflow
            eye.style.animation = null;
        });
        setTimeout(randomBlink, Math.random() * 3000 + 2000);
    }
    randomBlink();
});

// Custom mousestop event
(function() {
    let timeout;
    document.addEventListener('mousemove', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const event = new CustomEvent('mousestop');
            document.dispatchEvent(event);
        }, 3000);
    });
})();
