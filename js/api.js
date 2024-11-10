
// import {createMarker} from './map.js';

import {randomFloat} from './random-generators.js';
import {map, markerGroup} from './main.js';
import {renderSimilarThumb} from './popup.js';
import {makeActive} from './form.js'

// const address = document.getElementById('address');
// const map = L.map('map-canvas')
//   .on('load', () => {
//     makeActive();
//     address.value = 'LatLng(35.67749, 139.76854)';
//   })
//   .setView({
//     lat: 35.67749,
//     lng: 139.76854,
//   }, 13);

//   L.tileLayer(
//     'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//     {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     },
//   ).addTo(map);

//Other markers

const iconSmall = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});



//Function for creating marker
const createMarker = (element) => {
  markerGroup.addTo(map)
  const latitude =  randomFloat(35.65000, 35.70000, 5);
  const longitude =  randomFloat(139.70000, 139.80000, 5);
  const markerSmall = L.marker({
    lat: latitude,
    lng: longitude,
  },
  { icon: iconSmall,
  });
  markerSmall
    .addTo(markerGroup)
    .bindPopup(renderSimilarThumb(element));
}

const ALERT_SHOW_TIME = 5000;
const POINTSLIMIT = 10;

const showAlert = () => {
  const body = document.querySelector('body');
  const downloadError = document.createElement('aside');
  body.appendChild(downloadError);
  const errorMessage = document.createElement('div');
  downloadError.appendChild(errorMessage);
  downloadError.style.position = 'absolute';
  downloadError.style.zIndex = '10';
  downloadError.style.top = '0';
  downloadError.style.width = '600px';
  downloadError.style.left = '0';
  errorMessage.style.color = 'tomato';
  errorMessage.style.fontSize = '46px';
  errorMessage.style.fontFamily = 'Sans-serif, Arial';
  errorMessage.textContent = 'Ошибка загрузки.Сорян';

  setTimeout(() => {
    downloadError.remove();
  }, ALERT_SHOW_TIME);
};

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


function getData() {
  fetch('https://25.javascript.htmlacademy.pro/keksobooking/data', {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json(); // Parse the response as JSON
    })
    .then((listOfObjects) => {
      const accommodation = document.getElementById('housing-type');
      let currentMarkers = []; // Array to keep track of markers on the map

      const deleteMarkers = () => {
        // Clear existing markers using a method appropriate to your map library
        currentMarkers.forEach((marker) => {
          if (marker) {
            // If using Leaflet:
            map.removeLayer(marker);
          }
        });
        currentMarkers = []; // Clear the array of current markers
      }
      const createMarkers = () => {
        // Ensure there is a selected option
        const selectedType = accommodation.selectedOptions[0]?.value;
        if (!selectedType) return;

        // Filter the list based on the selected housing type and apply a limit
        const filteredList = listOfObjects
          .filter((element) => element.offer.type === selectedType)
          .slice(0, POINTSLIMIT);

        // Create new markers for each filtered element
        filteredList.forEach((element) => {
          const marker = createMarker(element); // Assuming createMarker returns a marker instance
          if (marker) {
            currentMarkers.push(marker); // Keep track of new markers if marker is valid
          }
        });
      };

      accommodation.addEventListener('change', () => {
        markerGroup.clearLayers();
        createMarkers();
      });

    })
    .catch((err) => {
      showAlert();
    });
}



export {createMainMarker, createMarker, getData};
