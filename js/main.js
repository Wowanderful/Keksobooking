import {createSimilarObjects} from './moc.js';
import {makeInactive, makeActive, validateForm, setCheckInOut} from './form.js';
import {createMainMarker, createMarker} from './map.js';

makeInactive();

validateForm();

setCheckInOut();


const address = document.getElementById('address');
const map = L.map('map-canvas')
  .on('load', () => {
    makeActive();
    address.value = 'LatLng(35.67749, 139.76854)';
  })
  .setView({
    lat: 35.67749,
    lng: 139.76854,
  }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

createMainMarker();

createSimilarObjects.forEach((element) => {
  createMarker(element)
});

export {map};
