document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const chocolateBox = document.getElementById('chocolateBox');
    const boxLid = document.querySelector('.box-lid');
    const mainContent = document.getElementById('mainContent');
    const daysCount = document.getElementById('daysCount');
    const floatingLetter = document.getElementById('floatingLetter');
    const bgMusic = document.getElementById('bgMusic');
    
    // Set the start date (customize this date)
    const startDate = new Date('2024-01-01'); // Change this to your relationship start date
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Initialize GSAP timeline
    const tl = gsap.timeline({ paused: true });
    
    // Setup animations
    tl.to('.box-lid', {
        rotationX: 180,
        duration: 1.5,
        ease: 'power2.inOut'
    })
    .to('.instruction', {
        opacity: 0,
        duration: 0.5
    }, '-=1.5')
    .to('.chocolate-box', {
        scale: 0.5,
        y: -100,
        opacity: 0,
        duration: 1
    })
    .to(mainContent, {
        display: 'block',
        opacity: 1,
        duration: 1
    })
    .from('.love-counter', {
        scale: 0,
        opacity: 0,
        duration: 1
    })
    .from('.polaroid', {
        rotation: -15,
        scale: 0,
        opacity: 0,
        duration: 1
    });

    // Counter animation
    const animateCounter = () => {
        let count = 0;
        const interval = setInterval(() => {
            daysCount.textContent = count;
            count++;
            if (count > diffDays) {
                clearInterval(interval);
                showFloatingLetter();
            }
        }, 50);
    };

    // Show floating letter
    const showFloatingLetter = () => {
        setTimeout(() => {
            floatingLetter.classList.remove('hidden');
            floatingLetter.classList.add('visible');
        }, 1000);
    };

    // Click/tap handler for the chocolate box
    chocolateBox.addEventListener('click', () => {
        if (!tl.isActive()) {
            mainContent.classList.remove('hidden');
            tl.play();
            animateCounter();
            playMusic();
        }
    });

    // Shake detection for mobile devices
    let shakeCount = 0;
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', (event) => {
            const acceleration = event.accelerationIncludingGravity;
            if (acceleration.x > 15 || acceleration.y > 15 || acceleration.z > 15) {
                handleShake();
            }
        });
    }

    // Desktop alternative for shake (multiple clicks)
    let clickCount = 0;
    let clickTimer;
    document.addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            if (clickCount >= 3) {
                handleShake();
            }
            clickCount = 0;
        }, 1000);
    });

    // Handle shake effect
    function handleShake() {
        shakeCount++;
        if (shakeCount <= 3) {
            createChocolateRain();
        }
    }

    // Create chocolate rain effect
    function createChocolateRain() {
        for (let i = 0; i < 15; i++) {
            const chocolate = document.createElement('div');
            chocolate.className = 'chocolate-drop';
            chocolate.style.left = Math.random() * 100 + '%';
            chocolate.style.animationDuration = (Math.random() * 2 + 1) + 's';
            chocolate.style.animationDelay = (Math.random() * 0.5) + 's';
            document.body.appendChild(chocolate);

            // Remove chocolate drops after animation
            setTimeout(() => {
                chocolate.remove();
            }, 3000);
        }
    }

    // Music controls
    function playMusic() {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(() => {
            console.log('Audio autoplay was prevented. User interaction required.');
        });
    }

    // Add dynamic style for chocolate drops
    const style = document.createElement('style');
    style.textContent = `
        .chocolate-drop {
            position: fixed;
            width: 20px;
            height: 20px;
            background: #6B4423;
            border-radius: 50%;
            pointer-events: none;
            animation: chocolateRain linear forwards;
            z-index: 1000;
        }

        @keyframes chocolateRain {
            0% {
                transform: translateY(-20vh) scale(0);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
