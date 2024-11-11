

import {randomFloat} from './random-generators.js';
import {map, markerGroup} from './main.js';
import {renderSimilarThumb} from './popup.js';
import {debounce} from './debounce.js';

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
      const price = document.getElementById('housing-price');
      const rooms = document.getElementById('housing-rooms');
      const guests = document.getElementById('housing-guests');
      const features = document.getElementById('housing-features');
      let currentMarkers = []; // Array to keep track of markers on the map

      const createMarkers = () => {
        const selectedType = accommodation.selectedOptions[0]?.value;
        const priceType = price.selectedOptions[0]?.value;
        const roomType = rooms.selectedOptions[0]?.value;
        const guestsNumber = guests.selectedOptions[0]?.value;
        const featureIn = features.value;

        let filteredList;

        // Filter the list based on the selected housing type and apply a limit
        if (selectedType === 'any' || !selectedType) {
          filteredList = listOfObjects.slice(0, POINTSLIMIT);
        }
        else {
        filteredList = listOfObjects
          .filter((element) => element.offer.type === selectedType)
          .slice(0, POINTSLIMIT);
        };

        //Filter the list based on the selected price limit
        if (priceType === 'any' || !priceType) {
          filteredList = listOfObjects.slice(0, POINTSLIMIT);
        }
        else if (priceType === 'middle') {
          filteredList = listOfObjects
          .filter((element) => element.offer.price >= 10000 && element.offer.price < 50000)
          .slice(0, POINTSLIMIT);
        }
        else if (priceType === 'low') {
          filteredList = listOfObjects
          .filter((element) => element.offer.price < 10000)
          .slice(0, POINTSLIMIT);
        }
        else if (priceType === 'high') {
          filteredList = listOfObjects
          .filter((element) => element.offer.price >= 50000)
          .slice(0, POINTSLIMIT);
        }

        //Filter the list based on selected number of rooms
        if (roomType === 'any' || !roomType) {
          filteredList = listOfObjects.slice(0, POINTSLIMIT);
        }
        else {
          filteredList = listOfObjects
          .filter((element) => element.offer.rooms === parseInt(roomType))
          .slice(0, POINTSLIMIT);
        }

        //Filter the list based on selected number of rooms
        if (guestsNumber === 'any' || !guestsNumber) {
              filteredList = listOfObjects.slice(0, POINTSLIMIT);
            }
        else {
              filteredList = listOfObjects
              .filter((element) => element.offer.guests === parseInt(guestsNumber))
              .slice(0, POINTSLIMIT);
            }

        // Filter the list based on features checked
        if (!featureIn) {
          filteredList = listOfObjects.slice(0, POINTSLIMIT);
        }
        else {
          filteredList = listOfObjects
          .filter((element) => element.offer.features.includes(featureIn.value))
          .slice(0, POINTSLIMIT);
        }


        // Create new markers for each filtered element
        filteredList.forEach((element) => {
          const marker = createMarker(element);
          if (marker) {
            currentMarkers.push(marker);
          }
        });
      };

      createMarkers();//No events, just loading

      accommodation.addEventListener('change', () => {//Accomodation selection choice event
        markerGroup.clearLayers();
        debounce(createMarkers(), 500);
      });

      price.addEventListener('change', () => {//Price selection choice event
        markerGroup.clearLayers();
        debounce(createMarkers(), 500);
      });

      rooms.addEventListener('change', () => {//Number of rooms selection choice event
        markerGroup.clearLayers();
        debounce(createMarkers(), 500);
      })

      guests.addEventListener('change', () => {//Number of guests selection choice event
        markerGroup.clearLayers();
        debounce(createMarkers(), 500);
      })

      features.addEventListener('change', () => {//Features availability choice event
        markerGroup.clearLayers();
        debounce(createMarkers(), 500);
      })

    })
    .catch((err) => {
      showAlert();
    });
}



export {createMainMarker, createMarker, getData};
