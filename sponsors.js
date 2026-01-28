const sponsorsFolder = './assets/sponsors/';
const sponsors = [
  'sponsor1.png',
  'sponsor2.jpg',
  'sponsor3.png',
  'sponsor4.png',
  'sponsor5.png',
  'sponsor6.png',
  'sponsor7.png',
  'sponsor8.jpg',
  'sponsor9.png',
  'sponsor10.png',
  'sponsor11.png',
  'sponsor12.png',
  'sponsor13.png',
  'sponsor14.jpg',
  'sponsor15.png'
];

const track = document.querySelector('.sponsors-track');

// Injection automatique des images (doublées pour boucle infinie)
sponsors.concat(sponsors).forEach(file => {
  const img = document.createElement('img');
  img.src = sponsorsFolder + file;
  track.appendChild(img);
});

let position = 0;
let speed = 0.3;
let isDragging = false;
let startX;
let scrollStart;

function animate() {
  if (!isDragging) {
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
  }
  requestAnimationFrame(animate);
}

animate();

// Interaction souris
track.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX;
  scrollStart = position;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const delta = e.pageX - startX;
  position = scrollStart + delta;
  track.style.transform = `translateX(${position}px)`;
});

// Interaction tactile
track.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].pageX;
  scrollStart = position;
});

track.addEventListener('touchend', () => {
  isDragging = false;
});

track.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const delta = e.touches[0].pageX - startX;
  position = scrollStart + delta;
  track.style.transform = `translateX(${position}px)`;
});