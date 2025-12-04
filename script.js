function addLayer(type) {
  const cake = document.getElementById('cake');
  const layer = document.createElement('div');
  layer.classList.add('layer', type);
  cake.appendChild(layer);

   if (type === 'candle') {
    const song = document.getElementById('birthdaySong');
    song.currentTime = 0; // restart song if needed
    song.play().catch(e => console.log("Autoplay blocked:", e));

    showConfetti();
  }
}

function resetCake() {
  const cake = document.getElementById('cake');
  cake.innerHTML = '';
}
function showConfetti() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}
function stopSong() {
  const song = document.getElementById('birthdaySong');
  song.pause();
  song.currentTime = 0; // Reset to the start
}