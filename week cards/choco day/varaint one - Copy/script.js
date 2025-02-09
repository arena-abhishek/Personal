document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ff6b6b" },
            shape: { type: "heart" },
            opacity: { value: 0.5, random: true },
            size: { value: 5, random: true },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                out_mode: "out"
            }
        }
    });

    // Background Music Control
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isMusicPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🎵';
            musicToggle.style.animation = 'none';
        } else {
            bgMusic.play();
            musicToggle.textContent = '🎶';
            musicToggle.style.animation = 'pulse 2s infinite';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    const envelope = document.querySelector('.envelope-3d');
    const messageContent = document.querySelector('.message-content');
    const chocolateBox = document.querySelector('.chocolate-box');
    const finalMessage = document.querySelector('.final-message');
    const navigationButtons = document.querySelector('.navigation-buttons');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSection = 0;
    const sections = [
        { element: envelope.parentElement, prev: null, next: messageContent },
        { element: messageContent, prev: envelope.parentElement, next: chocolateBox },
        { element: chocolateBox, prev: messageContent, next: finalMessage },
        { element: finalMessage, prev: chocolateBox, next: null }
    ];

    // Create sparkles
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
        document.querySelector('.sparkles').appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }

    setInterval(createSparkle, 300);

    // 3D Envelope Animation with enhanced effects
    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
        envelope.style.transform = 'rotateY(180deg) translateZ(50px)';
        
        // Create burst effect
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createSparkle(), i * 50);
        }

        setTimeout(() => {
            currentSection = 1;
            showSection(currentSection);
        }, 1000);
    });

    // Enhanced 3D effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.card, .envelope-3d, .chocolate-box, .photo-frame');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            const angleX = (e.pageX - cardX) / 30;
            const angleY = (e.pageY - cardY) / -30;
            card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) translateZ(50px)`;
        });
    });

    // Reset transform with smooth transition
    const resetTransform = (element) => {
        element.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
        element.style.transition = 'all 0.5s ease';
    };

    document.querySelectorAll('.card, .envelope-3d, .chocolate-box, .photo-frame').forEach(element => {
        element.addEventListener('mouseleave', () => resetTransform(element));
    });

    function showSection(index) {
        sections.forEach(section => {
            section.element.classList.add('hidden');
        });
        sections[index].element.classList.remove('hidden');
        
        navigationButtons.classList.remove('hidden');
        prevBtn.style.visibility = sections[index].prev ? 'visible' : 'hidden';
        nextBtn.style.visibility = sections[index].next ? 'visible' : 'hidden';

        // Enhanced entrance animation
        sections[index].element.style.animation = 'fadeIn 1s ease-in-out';
        
        // Create special effects for each section
        switch(index) {
            case 1: // Message content
                const texts = sections[index].element.querySelectorAll('.romantic-text');
                texts.forEach((text, i) => {
                    text.style.animation = `floatIn 0.5s ${i * 0.2}s forwards`;
                });
                break;
            case 2: // Chocolate box
                const pieces = document.querySelectorAll('.piece');
                pieces.forEach((piece, i) => {
                    piece.style.animation = `fadeIn 0.5s ${i * 0.1}s forwards`;
                });
                break;
            case 3: // Final message
                createFloatingHearts();
                initializePhotoBook();
                break;
        }
    }

    // Navigation with enhanced transitions
    prevBtn.addEventListener('click', () => {
        if (currentSection > 0) {
            currentSection--;
            showSection(currentSection);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    });

    // Enhanced chocolate piece interaction
    const chocolatePieces = document.querySelectorAll('.piece');
    chocolatePieces.forEach(piece => {
        piece.addEventListener('click', () => {
            const message = piece.getAttribute('data-message');
            showMessage3D(message);
            createSparkleExplosion(piece);
        });
    });

    function createSparkleExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'explosion-sparkle';
            sparkle.style.left = centerX + 'px';
            sparkle.style.top = centerY + 'px';
            const angle = (i / 20) * Math.PI * 2;
            const velocity = 10;
            sparkle.style.setProperty('--angle', angle + 'rad');
            sparkle.style.setProperty('--velocity', velocity + 'px');
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }
    }

    function showMessage3D(message) {
        const popup = document.createElement('div');
        popup.className = 'message-popup';
        popup.innerHTML = `
            <div class="popup-content" style="transform-style: preserve-3d;">
                <p style="transform: translateZ(50px);">${message}</p>
                <div class="popup-hearts" style="transform: translateZ(30px);">❤️</div>
            </div>
        `;
        document.body.appendChild(popup);

        // Enhanced floating hearts animation
        const hearts = popup.querySelector('.popup-hearts');
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('span');
            heart.innerHTML = ['❤️', '💖', '💝', '💕'][Math.floor(Math.random() * 4)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 2 + 1) + 's';
            heart.style.transform = `translateZ(${Math.random() * 50}px) scale(${Math.random() * 0.5 + 0.5})`;
            hearts.appendChild(heart);
        }

        setTimeout(() => {
            popup.style.opacity = '0';
            setTimeout(() => popup.remove(), 500);
        }, 2500);
    }

    function createFloatingHearts() {
        const container = document.querySelector('.floating-hearts-container');
        container.innerHTML = '';
        
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = ['❤️', '💖', '💝', '💕'][Math.floor(Math.random() * 4)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.animationDelay = (Math.random() * 2) + 's';
            heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
            container.appendChild(heart);
        }
    }

    function initializePhotoBook() {
        const book = document.querySelector('.memory-book');
        const pages = document.querySelectorAll('.page');
        
        pages.forEach((page, index) => {
            page.style.zIndex = pages.length - index;
            page.addEventListener('mouseover', () => {
                const angle = -30 * (index + 1);
                page.style.transform = `rotateY(${angle}deg)`;
            });
            
            page.addEventListener('mouseout', () => {
                page.style.transform = 'rotateY(0deg)';
            });
        });
    }

    // Image upload handling with preview
    const girlfriendImage = document.getElementById('gf-image');
    const uploadButton = document.createElement('input');
    uploadButton.type = 'file';
    uploadButton.accept = 'image/*';
    uploadButton.style.display = 'none';
    uploadButton.addEventListener('change', handleImageUpload);
    document.body.appendChild(uploadButton);

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                girlfriendImage.src = e.target.result;
                girlfriendImage.style.animation = 'fadeIn 1s ease-in-out';
                
                // Create heart burst effect
                createSparkleExplosion(girlfriendImage);
            };
            reader.readAsDataURL(file);
        }
    }

    girlfriendImage.addEventListener('click', () => {
        if (girlfriendImage.src.includes('your-image.jpg')) {
            uploadButton.click();
        }
    });

    // Add dynamic styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px) scale(0.9); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .explosion-sparkle {
            position: fixed;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #ff6b6b, transparent);
            border-radius: 50%;
            pointer-events: none;
            animation: explode 1s ease-out forwards;
        }

        @keyframes explode {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(calc(cos(var(--angle)) * 100px), calc(sin(var(--angle)) * 100px)) scale(0);
                opacity: 0;
            }
        }

        .sparkle {
            position: absolute;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #fff, transparent);
            border-radius: 50%;
            animation: twinkle 1s ease-out forwards;
        }

        @keyframes twinkle {
            0% { transform: scale(0); opacity: 1; }
            50% { transform: scale(1); opacity: 0.5; }
            100% { transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
