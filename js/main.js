import {createSimilarObjects} from './moc.js';
import {renderSimilarThumb} from './popup.js';
// import {makeInactive, makeActive, pristine, adform} from './form.js';




// renderSimilarThumb(createSimilarObjects);

// makeInactive();
// makeActive();

//Валидатор - инициация
const pristine = new Pristine (adform, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
}, false
  );


//Валидируется поле заголовок объвления
function validateTitle (value) {
  return value.length >= 10 && value.length <= 100;
};

//Валидируется поле Price

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
}

const accommodation = document.getElementById('type').selectedOptions[0]

function ammendPlaceholder (value) {//Функция, которая меняет плейсхолдер поля с ценой в зависимости от вида жилья
  price.setAttribute('placeholder', value)
}
accSelector.addEventListener('change', (evt) => {
  evt.preventDefault();
  const selectedAccommodation = accSelector.selectedOptions[0].value; // Get updated selected option value
  ammendPlaceholder(minPrice[selectedAccommodation]);
});


function validatePrice (value) {
  return value.length && value > minPrice[accommodation.value] && value < 100000;
};

//Количество комнат и количество мест
const roomAndGuests = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0]
};

const roomSelector = document.getElementById('room_number');
const guestSelector = document.getElementById('capacity');

function validateGuests() {
  const selectedRoom = Number(roomSelector.selectedOptions[0].value);
  const selectedGuest = Number(guestSelector.selectedOptions[0].value);
  return roomAndGuests[selectedRoom].includes(selectedGuest);
}

function getRoomsErrorMessage () {
  let n = Number(roomSelector.selectedOptions[0].value)
  if (n === 1) {
   return "Не более 1 гостя"
  }
  else if (n === 2) {
   return "Не более 2-х гостей"
  }
  else if (n === 3) {
    return "Не более 3-х гостей"
  }
  else if (n === 100) {
   return "100 комнат - не для гостей"
  }
}

pristine.addValidator(document.getElementById('title'), validateTitle, 'От 10 до 100 символов');

pristine.addValidator(document.getElementById('price'), validatePrice, `От ${minPrice[accommodation.value]} До 100 000`);

pristine.addValidator(roomSelector, validateGuests, getRoomsErrorMessage);

pristine.addValidator(guestSelector, validateGuests, getRoomsErrorMessage);
