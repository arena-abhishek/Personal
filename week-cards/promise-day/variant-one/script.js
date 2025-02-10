document.addEventListener('DOMContentLoaded', () => {
    // Love promises array
    const promises = [
        "I promise to always stand by your side, no matter what.",
        "I promise to make you smile every day, even when you don't feel like it.",
        "I promise to cherish, respect, and love you forever.",
        "I promise to be your strength when you're weak, and your comfort when you're sad.",
        "I promise to love you more with each passing day.",
        "I promise to be your best friend and most loyal companion.",
        "I promise to create beautiful memories with you every day."
    ];

    // Special hidden promise
    const specialPromise = "I promise to be the reason for your happiness, today and always. You are my everything! ❤️";

    // Calculate days together (example start date: modify as needed)
    const startDate = new Date('2024-09-01'); // Change this to your actual start date
    const today = new Date();
    const daysTogethter = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('days-counter').textContent = daysTogethter;

    // Reveal promises functionality
    let promiseIndex = 0;
    const promisesContainer = document.getElementById('promises-container');
    const revealButton = document.getElementById('reveal-promises');

    revealButton.addEventListener('click', () => {
        if (promiseIndex < promises.length) {
            const promiseElement = document.createElement('div');
            promiseElement.className = 'promise';
            promiseElement.innerHTML = `
                ${promises[promiseIndex]}
                <div class="heart">❤️</div>
            `;
            promisesContainer.appendChild(promiseElement);
            promiseIndex++;
        } else if (promiseIndex === promises.length) {
            // Reveal special promise
            const specialElement = document.createElement('div');
            specialElement.className = 'promise';
            specialElement.innerHTML = `
                ${specialPromise}
                <div class="heart">💝</div>
            `;
            specialElement.style.background = 'linear-gradient(45deg, #ffe6e6, #ffcccc)';
            promisesContainer.appendChild(specialElement);
            promiseIndex++;
        }
    });

    // Custom promise functionality
    const addPromiseBtn = document.getElementById('add-promise');
    const customPromiseInput = document.getElementById('custom-promise');

    addPromiseBtn.addEventListener('click', () => {
        const customPromiseText = customPromiseInput.value.trim();
        if (customPromiseText) {
            const promiseElement = document.createElement('div');
            promiseElement.className = 'promise';
            promiseElement.innerHTML = `
                ${customPromiseText}
                <div class="heart">💖</div>
            `;
            promiseElement.style.background = 'linear-gradient(45deg, #fff0f0, #ffe6e6)';
            promisesContainer.appendChild(promiseElement);
            customPromiseInput.value = '';
        }
    });

    // Surprise button functionality
    const surpriseButton = document.getElementById('surprise-button');
    const finalMessage = document.getElementById('final-message');

    surpriseButton.addEventListener('click', () => {
        document.body.style.transition = 'opacity 3s';
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            finalMessage.classList.remove('hidden');
            document.body.style.opacity = '1';
        }, 3000);
    });

    // Touch and hold functionality
    let touchTimer;
    document.addEventListener('touchstart', () => {
        touchTimer = setTimeout(() => {
            document.querySelector('.initials-heart').style.transform = 'scale(1.5)';
            document.querySelector('.initials-heart').style.filter = 'drop-shadow(0 0 20px gold)';
        }, 500);
    });

    document.addEventListener('touchend', () => {
        clearTimeout(touchTimer);
        document.querySelector('.initials-heart').style.transform = 'scale(1)';
        document.querySelector('.initials-heart').style.filter = 'none';
    });

    // Add floating hearts animation
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animation = 'float 15s linear';
        heart.style.opacity = '0.6';
        document.body.appendChild(heart);

        heart.addEventListener('animationend', () => heart.remove());
    }

    setInterval(createFloatingHeart, 3000);
});

// Add this CSS animation to your stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        to {
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
