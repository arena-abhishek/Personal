document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 50 },
            color: { value: '#ff69b4' },
            shape: { type: 'heart' },
            size: { value: 5, random: true },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                out_mode: 'out'
            }
        }
    });

    // Calculate days together (from a special date)
    const startDate = new Date('2023-02-14'); // Valentine's Day 2023
    const today = new Date();
    const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('days-together').textContent = `${daysTogether} Days of Love`;

    // Kiss button interaction
    const kissButton = document.getElementById('kissButton');
    kissButton.addEventListener('click', createKissAnimation);

    // Touch and hold feature
    let touchTimer;
    let isHolding = false;
    
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('mousedown', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('mouseup', handleTouchEnd);

    // Blow kiss button
    const blowKissBtn = document.getElementById('blowKissBtn');
    blowKissBtn.addEventListener('click', handleBlowKiss);

    // Create floating hearts periodically
    setInterval(createFloatingHeart, 3000);
});

function createKissAnimation(e) {
    const kiss = document.createElement('div');
    kiss.className = 'flying-kiss';
    kiss.textContent = '💋';
    
    const startX = e.clientX || e.touches?.[0]?.clientX || window.innerWidth / 2;
    const startY = e.clientY || e.touches?.[0]?.clientY || window.innerHeight / 2;
    
    kiss.style.setProperty('--moveX', `${Math.random() * 200 - 100}px`);
    kiss.style.setProperty('--moveY', `${-Math.random() * 200 - 100}px`);
    
    kiss.style.left = `${startX}px`;
    kiss.style.top = `${startY}px`;
    
    document.body.appendChild(kiss);
    
    // Remove the kiss element after animation
    setTimeout(() => kiss.remove(), 2000);
    
    // Show a random sweet message
    showRandomMessage();
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}

function handleTouchStart() {
    isHolding = true;
    touchTimer = setTimeout(() => {
        if (isHolding) {
            showLoveLetter();
        }
    }, 2000);
}

function handleTouchEnd() {
    isHolding = false;
    clearTimeout(touchTimer);
}

function showLoveLetter() {
    const mainContent = document.querySelector('.main-content');
    const loveLetter = document.getElementById('loveLetter');
    
    mainContent.style.display = 'none';
    loveLetter.style.display = 'block';
    
    setTimeout(() => {
        mainContent.style.display = 'block';
        loveLetter.style.display = 'none';
    }, 5000);
}

function handleBlowKiss() {
    // Create multiple kisses in a spray pattern
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'flying-kiss';
            kiss.textContent = '💋';
            
            kiss.style.setProperty('--moveX', `${Math.random() * 300 - 150}px`);
            kiss.style.setProperty('--moveY', `${-Math.random() * 300 - 50}px`);
            
            kiss.style.left = '50%';
            kiss.style.top = '50%';
            
            document.body.appendChild(kiss);
            
            setTimeout(() => kiss.remove(), 2000);
        }, i * 200);
    }
}

function showRandomMessage() {
    const messages = [
        "Every kiss with you is a dream. I can't wait for our next one. ❤️",
        "Your lips are my favorite place to be.",
        "A thousand kisses would never be enough. You have all of mine—forever.",
        "Each kiss tells our love story in the sweetest way possible.",
        "Your kisses make my heart skip a beat every single time."
    ];
    
    const mainMessage = document.getElementById('mainMessage');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    mainMessage.style.opacity = '0';
    setTimeout(() => {
        mainMessage.textContent = randomMessage;
        mainMessage.style.opacity = '1';
    }, 300);
    
    setTimeout(() => {
        mainMessage.style.opacity = '0';
        setTimeout(() => {
            mainMessage.textContent = "If distance could fade, I'd be kissing you right now. So here's a kiss filled with all my love, just for you. Happy Kiss Day! 😘❤️";
            mainMessage.style.opacity = '1';
        }, 300);
    }, 3000);
}
