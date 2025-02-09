document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.config({force3D: true});

    // Create twinkling hearts
    createTwinklingHearts();

    // Initialize the chocolate box interaction
    initChocolateBox();

    // Initialize love counter
    initLoveCounter();

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

function createTwinklingHearts() {
    const container = document.querySelector('.twinkling-hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 15 + 5}px`;
        heart.style.opacity = '0';
        container.appendChild(heart);

        // Animate each heart
        gsap.to(heart, {
            opacity: Math.random() * 0.5 + 0.5,
            duration: Math.random() * 2 + 1,
            repeat: -1,
            yoyo: true
        });
    }
}

function initChocolateBox() {
    const box = document.getElementById('chocolateBox');
    const lid = document.querySelector('.box-lid');
    const chocolates = document.querySelectorAll('.chocolate');
    const goldenTicket = document.querySelector('.golden-ticket');
    const loveStory = document.querySelector('.love-story');
    const finalNote = document.querySelector('.final-note');
    let isBoxOpen = false;

    box.addEventListener('click', () => {
        if (!isBoxOpen) {
            openBox();
            isBoxOpen = true;
        }
    });

    function openBox() {
        // Animate box lid
        lid.classList.add('open');

        // Show golden ticket with animation
        setTimeout(() => {
            goldenTicket.classList.remove('hidden');
            gsap.from(goldenTicket, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"
            });
        }, 1000);

        // Initialize chocolate interactions
        chocolates.forEach(chocolate => {
            chocolate.addEventListener('click', () => {
                const message = chocolate.getAttribute('data-message');
                showMessage(message);
            });
        });

        // Show love story
        setTimeout(() => {
            loveStory.classList.remove('hidden');
            initLoveStory();
        }, 1500);
    }
}

function showMessage(message) {
    // Create a floating message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.position = 'fixed';
    messageEl.style.left = '50%';
    messageEl.style.top = '50%';
    messageEl.style.transform = 'translate(-50%, -50%)';
    messageEl.style.background = 'rgba(255, 215, 0, 0.9)';
    messageEl.style.color = '#3c1f0c';
    messageEl.style.padding = '20px';
    messageEl.style.borderRadius = '10px';
    messageEl.style.fontSize = '1.2rem';
    messageEl.style.fontFamily = "'Dancing Script', cursive";
    messageEl.style.zIndex = '1000';
    document.body.appendChild(messageEl);

    // Animate the message
    gsap.from(messageEl, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
    });

    // Remove the message after animation
    setTimeout(() => {
        gsap.to(messageEl, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            onComplete: () => messageEl.remove()
        });
    }, 2000);
}

function initLoveStory() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            gsap.to(slide, {
                opacity: 0,
                duration: 0.5
            });
        });

        gsap.to(slides[index], {
            opacity: 1,
            duration: 0.5
        });
    }

    // Show slides in sequence
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(0);
    setInterval(nextSlide, 3000);
}

function initLoveCounter() {
    const startDate = new Date('2023-02-09'); // Replace with your actual start date
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const counter = document.getElementById('daysCounter');
    let count = 0;
    
    const interval = setInterval(() => {
        if (count <= diffDays) {
            counter.textContent = count;
            count++;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// Add a function to create chocolate rain effect
function createChocolateRain() {
    for (let i = 0; i < 50; i++) {
        const chocolate = document.createElement('div');
        chocolate.innerHTML = '🍫';
        chocolate.style.position = 'fixed';
        chocolate.style.left = `${Math.random() * 100}%`;
        chocolate.style.top = '-20px';
        chocolate.style.fontSize = `${Math.random() * 20 + 10}px`;
        chocolate.style.zIndex = '1000';
        document.body.appendChild(chocolate);

        gsap.to(chocolate, {
            y: window.innerHeight + 100,
            rotation: Math.random() * 360,
            duration: Math.random() * 2 + 1,
            ease: "none",
            onComplete: () => chocolate.remove()
        });
    }
}
