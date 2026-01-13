// 1. Points du trajet (ordre important)
const route = [
    [47.2184, -1.5536],   // Nantes
    [44.8333, -0.5666], // Bordeaux
    [43.3183, -1.9812],   // Saint-Sebastien
    [41.6523, -4.7245],   // Valladolid
    [36.1408, -5.4562],   // Algeciras
    [35.7595, -5.8340],   // Tanger
    [32.6852, -4.7451],   // Midelt
    [31.4344, -4.2323],   // Erfoud
    [31.2380, -4.0320],   // Boulaajoul
    [31.0994, -4.0127],   // Merzouga
    [30.8730, -3.9730],   // Ouzina
    [31.0070, -4.4340],   // Ramlia
    [30.3324, -5.8384],   // Zagora
    [29.8229, -5.7207],   // M'hamid El Ghizlane
    [29.7245, -8.9747],   // Tafraoute
    [31.6295, -7.9811],   // Marrakech
    // [33.5731, -7.5898],   // Casablanca
    // [34.0209, -6.8416]    // Rabat
];

// 2. Création de la carte
const itineraire = L.map('itineraire');

// 3. Fond de carte OpenStreetMap
L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; OpenStreetMap & CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  }
).addTo(itineraire);

// 4. Tracé du trajet
const polyline = L.polyline(route, {
  color: '#f5c74b',
  weight: 3,
  opacity: 0.8,
  lineCap: 'round',
  lineJoin: 'round',
  dashArray: '6, 10' // optionnel : pointillé élégant
}).addTo(itineraire);

// 5. Ajuste automatiquement le zoom et le centre
itineraire.fitBounds(polyline.getBounds());

// 6. Marqueurs pour les étapes (optionnel)
route.forEach((point, index) => {
L.circleMarker(point, {
  radius: 4,
  fillColor: '#fce8b3',
  color: '#000',
  weight: 1,
  fillOpacity: 1
})
.addTo(itineraire)
.bindPopup(`Étape ${index + 1}`);
});

// itineraire.dragging.disable();
// itineraire.scrollWheelZoom.disable();
// itineraire.doubleClickZoom.disable();
// itineraire.touchZoom.disable();
// itineraire.boxZoom.disable();
// itineraire.keyboard.disable();