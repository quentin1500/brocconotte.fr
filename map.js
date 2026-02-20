// Coordonnées GPS (exemple : Nantes Ynov Campus)
const twingoLocation = {
  lat: 47.2053824,
  lng: -1.5394686
};

const zoom = 9; // 10=Metropole, 9=Département, 8=départements voisins, 7=Region, 6=pays

// Initialisation de la carte
const map = L.map('map').setView(
  [twingoLocation.lat, twingoLocation.lng],
  zoom
);

// Fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors, OpenTopoMap'
}).addTo(map);

const twingoIcon = L.icon({
  iconUrl: './assets/pixel_art.gif',
  iconSize: [100, 100]
});

// Marqueur twingo
const marker = L.marker([twingoLocation.lat, twingoLocation.lng], { icon: twingoIcon })
  .addTo(map)
  // .bindPopup('🏎️ Twingo Brocconotte')
  .openPopup();

async function updateLocation() {
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbzUQoOJxwkrz7XHw23jZD9oCVbrNBh1q-6cztljLDkD7qQvYfRLpANGedVcUP2cC_S2/exec'
  );
  const data = await res.json();

  marker.setLatLng([data.lat, data.lng]);
  map.setView([data.lat, data.lng]);
}

// Rafraîchissement chaque minute
updateLocation();
setInterval(updateLocation, 60000);
