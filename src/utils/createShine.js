export function createShineBurst(quantity = 15) {
    const shineContainer = document.querySelector('.shine');

    if (!shineContainer) {
        console.error('🚫 Shine container not found!');
        return;
    }

    for (let i = 0; i < quantity; i++) {
        const sparkle = document.createElement('div');

        // Direção aleatória (ângulo em radianos)
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 150 + 50;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        sparkle.style.setProperty('--x', `${x}px`);
        sparkle.style.setProperty('--y', `${y}px`);

        // Tamanho aleatório do brilho
        const size = Math.random() * 6 + 4;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        shineContainer.appendChild(sparkle);

        // Remove depois da animação
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}
