document.addEventListener('DOMContentLoaded', () => {
    const unwrapBtn = document.getElementById('unwrapBtn');
    const hiddenMessage = document.querySelector('.hidden-message');
    const chocolateBar = document.querySelector('.chocolate-bar');
    
    // Create falling chocolates
    const createFallingChocolates = () => {
        const fallingContainer = document.querySelector('.falling-chocolates');
        for (let i = 0; i < 15; i++) {
            const chocolate = document.createElement('div');
            chocolate.innerHTML = '🍫';
            chocolate.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 20}px;
                left: ${Math.random() * 100}%;
                animation: fall ${Math.random() * 2 + 2}s linear infinite;
                animation-delay: ${Math.random() * 3}s;
            `;
            fallingContainer.appendChild(chocolate);
        }
    };

    // Add falling animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(500px) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Unwrap button click handler
    unwrapBtn.addEventListener('click', () => {
        // Animate chocolate bar
        chocolateBar.style.transform = 'rotateY(180deg)';
        
        // Show hidden message with delay
        setTimeout(() => {
            hiddenMessage.classList.add('show-message');
            createFallingChocolates();
        }, 500);
        
        // Disable button after click
        unwrapBtn.style.pointerEvents = 'none';
        unwrapBtn.style.opacity = '0.5';
    });

    // Add hover effect to chocolate pieces
    const pieces = document.querySelectorAll('.piece');
    pieces.forEach(piece => {
        piece.addEventListener('mouseover', () => {
            piece.style.transform = 'scale(1.1)';
            piece.style.transition = 'transform 0.3s';
        });
        piece.addEventListener('mouseout', () => {
            piece.style.transform = 'scale(1)';
        });
    });
});
