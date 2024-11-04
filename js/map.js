import {randomFloat} from './random-generators.js';
import {map} from './main.js';
import {renderSimilarThumb} from './popup.js'

const address = document.getElementById('address');

//Main marker
function createMainMarker () {

  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const marker = L.marker(
    {
      lat: 35.67749,
      lng: 139.76854,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  marker.addTo(map);

  marker.on('moveend', (evt) => {
    address.value = evt.target.getLatLng();
  });
}

//Other markers

const iconSmall = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

//Function for creating marker
const createMarker = (element) => {
  const latitude =  randomFloat(35.65000, 35.70000, 5);
  const longitude =  randomFloat(139.70000, 139.80000, 5);
  const markerSmall = L.marker({
    lat: latitude,
    lng: longitude,
  },
  { icon: iconSmall,
  });
  markerSmall
    .addTo(map)
    .bindPopup(renderSimilarThumb(element));
}

export {createMainMarker, createMarker}



