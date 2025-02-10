document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const hugButton = document.getElementById('hugButton');
    const surpriseButton = document.getElementById('surpriseButton');
    const hugOverlay = document.getElementById('hugOverlay');
    const surpriseOverlay = document.getElementById('surpriseOverlay');
    const teddy = document.getElementById('teddy');
    const bgMusic = document.getElementById('bgMusic');
    const hugCounter = document.querySelector('.hug-counter');
    const container = document.querySelector('.container');

    // Initialize hug count from localStorage or set to 0
    let hugCount = parseInt(localStorage.getItem('hugCount')) || 0;
    updateHugCounter();

    // Create floating hearts
    function createFloatingHearts() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.opacity = '0';
        heart.style.animation = 'float 6s linear';
        
        document.querySelector('.floating-hearts').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Create sparkles
    function createSparkles() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDuration = Math.random() * 2 + 2 + 's';
        sparkle.style.fontSize = Math.random() * 15 + 5 + 'px';
        sparkle.style.opacity = '0';
        sparkle.style.animation = 'sparkle 4s linear';
        
        document.querySelector('.sparkles').appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 4000);
    }

    // Start background animations
    setInterval(createFloatingHearts, 300);
    setInterval(createSparkles, 200);

    // Update hug counter
    function updateHugCounter() {
        hugCounter.textContent = `${hugCount} hugs shared`;
        localStorage.setItem('hugCount', hugCount.toString());
    }

    // Hug Button Click Handler
    hugButton.addEventListener('click', () => {
        hugCount++;
        updateHugCounter();
        hugOverlay.style.display = 'flex';
        
        // Vibration for mobile devices
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }

        // Show hug animation
        setTimeout(() => {
            hugOverlay.style.display = 'none';
        }, 2000);

        // Trigger teddy animation
        teddy.style.transform = 'scale(1.2)';
        setTimeout(() => {
            teddy.style.transform = 'scale(1)';
        }, 300);
    });

    // Surprise Button Click Handler
    surpriseButton.addEventListener('click', () => {
        surpriseOverlay.style.display = 'flex';
        
        // Fade in effect
        surpriseOverlay.style.opacity = '0';
        requestAnimationFrame(() => {
            surpriseOverlay.style.transition = 'opacity 1s';
            surpriseOverlay.style.opacity = '1';
        });

        // Auto-hide after 5 seconds
        setTimeout(() => {
            surpriseOverlay.style.opacity = '0';
            setTimeout(() => {
                surpriseOverlay.style.display = 'none';
            }, 1000);
        }, 5000);
    });

    // Close overlays when clicked
    [hugOverlay, surpriseOverlay].forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    });

    // Background Music Controls
    let musicPlaying = false;
    container.addEventListener('click', () => {
        if (!musicPlaying) {
            bgMusic.play().catch(() => {
                console.log('Audio autoplay was prevented');
            });
            musicPlaying = true;
        }
    });

    // Love Quotes Rotation
    const quotes = [
        "In your arms, I've found my safe place. In your hugs, I've found my forever home.",
        "If hugs were measured in love, I'd give you an infinite one.",
        "Every time we hug, my heart skips a beat.",
        "Your hugs make everything better.",
        "In your embrace, I find my peace."
    ];

    const loveQuotes = document.getElementById('loveQuotes');
    let currentQuote = 0;

    function rotateQuotes() {
        loveQuotes.style.opacity = '0';
        setTimeout(() => {
            currentQuote = (currentQuote + 1) % quotes.length;
            loveQuotes.innerHTML = `<p>${quotes[currentQuote]}</p>`;
            loveQuotes.style.opacity = '1';
        }, 500);
    }

    setInterval(rotateQuotes, 5000);

    // Add heartbeat animation to the main content
    const mainContent = document.querySelector('.main-content');
    setInterval(() => {
        mainContent.style.transform = 'scale(1.01)';
        setTimeout(() => {
            mainContent.style.transform = 'scale(1)';
        }, 200);
    }, 2000);
});
