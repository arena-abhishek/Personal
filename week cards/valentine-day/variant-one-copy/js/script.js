document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    const startScreen = document.getElementById('startScreen');
    const startBtn = document.querySelector('.start-btn');
    const chapters = document.querySelectorAll('.chapter');
    const bgMusic = document.getElementById('bgMusic');
    let currentChapter = 0;

    // Love reasons array
    const loveReasons = [
        "Your smile lights up my world",
        "The way you understand me completely",
        "Your kindness towards everyone",
        "The sound of your laughter",
        "How you make every day special",
        "Your beautiful soul",
        "The way you care for others",
        "Your determination and strength",
        "The sparkle in your eyes",
        "How you make me a better person"
    ];

    // Initialize love counter
    const startDate = new Date('2024-02-14'); // Change this to your relationship start date
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('daysCounter').textContent = diffDays;

    // Start button click handler
    startBtn.addEventListener('click', () => {
        startScreen.style.display = 'none';
        showChapter(0);
        if (bgMusic) {
            bgMusic.play().catch(e => console.log('Audio autoplay prevented'));
        }
        createFloatingElements();
    });

    // Show chapter function
    function showChapter(index) {
        chapters.forEach(chapter => chapter.classList.remove('active'));
        if (chapters[index]) {
            chapters[index].classList.add('active');
            if (index === 1) {
                createHeartNotes();
            }
        }
    }

    // Create floating hearts and effects
    function createFloatingElements() {
        const container = document.querySelector('.background-effects');
        
        // Create hearts
        for (let i = 0; i < 20; i++) {
            createFloatingElement('❤️', 'floating-heart');
        }

        // Create sparkles
        for (let i = 0; i < 30; i++) {
            createFloatingElement('✨', 'floating-sparkle');
        }

        // Create rose petals
        for (let i = 0; i < 15; i++) {
            createFloatingElement('🌸', 'floating-petal');
        }

        function createFloatingElement(content, className) {
            const element = document.createElement('div');
            element.className = className;
            element.textContent = content;
            element.style.left = Math.random() * 100 + 'vw';
            element.style.animationDuration = (Math.random() * 3 + 2) + 's';
            element.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(element);
        }
    }

    // Create heart notes with love reasons
    function createHeartNotes() {
        const heartNotesContainer = document.querySelector('.heart-notes');
        heartNotesContainer.innerHTML = '';

        loveReasons.forEach((reason, index) => {
            const note = document.createElement('div');
            note.className = 'heart-note';
            note.innerHTML = `❤️<br>${reason}`;
            note.style.animationDelay = `${index * 0.3}s`;
            heartNotesContainer.appendChild(note);
        });
    }

    // Handle chapter navigation
    document.addEventListener('click', () => {
        if (currentChapter < chapters.length - 1) {
            currentChapter++;
            showChapter(currentChapter);
        } else if (currentChapter === chapters.length - 1) {
            showFinalMessage();
        }
    });

    // Show final message
    function showFinalMessage() {
        const finalMessage = document.querySelector('.final-message');
        finalMessage.classList.add('active');
    }

    // Add heartbeat effect on tap
    document.addEventListener('touchstart', createHeartbeatEffect);
    document.addEventListener('click', createHeartbeatEffect);

    function createHeartbeatEffect(e) {
        const heart = document.createElement('div');
        heart.className = 'heartbeat-effect';
        heart.style.left = (e.clientX || e.touches[0].clientX) + 'px';
        heart.style.top = (e.clientY || e.touches[0].clientY) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }

    // Gift box interaction
    const giftBox = document.querySelector('.gift-box');
    if (giftBox) {
        giftBox.addEventListener('click', () => {
            giftBox.classList.add('opened');
            showSurpriseMessage();
        });
    }

    function showSurpriseMessage() {
        const message = document.createElement('div');
        message.className = 'surprise-message fade-in';
        message.innerHTML = `
            <p>Every petal represents a moment I've loved you.</p>
            <p>And trust me, there are infinite more to come. 🌹</p>
        `;
        giftBox.parentElement.appendChild(message);
    }
});
