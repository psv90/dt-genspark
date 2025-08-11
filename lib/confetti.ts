export async function fireConfetti() {
  const confetti = (await import('canvas-confetti')).default;

  const end = Date.now() + 500;
  const colors = ['#00E676', '#00C2FF', '#FF3D8D', '#FFD600'];

  (function frame() {
    confetti({
      particleCount: 16,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors
    });
    confetti({
      particleCount: 16,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}