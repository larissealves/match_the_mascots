/**
 * Generates a burst of animated sparkles.
 * Appends sparkle elements to the .shine container on the page.
 *
 * @param {number} quantity - The number of sparkles to generate (default is 15).
 */
export function createShineBurst(quantity = 15) {
  const shineContainer = document.querySelector('.shine');

  if (!shineContainer) {
    console.error('Shine container not found!');
    return;
  }

  for (let i = 0; i < quantity; i++) {
    const sparkle = document.createElement('div');

    // Random direction (angle in radians)
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    sparkle.style.setProperty('--x', `${x}px`);
    sparkle.style.setProperty('--y', `${y}px`);

    // Random sparkle size
    const size = Math.random() * 6 + 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    shineContainer.appendChild(sparkle);

    // Remove sparkle after animation ends (1 second)
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
}
