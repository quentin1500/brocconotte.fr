// Coordonnées GPS (exemple : Paris)
const twingoLocation = {
  lat: 47.2053824,
  lng: -1.5394686
};

// Initialisation de la carte
const map = L.map('map').setView(
  [twingoLocation.lat, twingoLocation.lng],
  15
);

// Fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

const twingoIcon = L.icon({
  iconUrl: './assets/pixel_art_36x36.png',
  iconSize: [40, 40]
});

// Marqueur twingo
const marker = L.marker([twingoLocation.lat, twingoLocation.lng], { icon: twingoIcon })
  .addTo(map)
  .bindPopup('🏎️ Brocconotte Twingo')
  .openPopup();

