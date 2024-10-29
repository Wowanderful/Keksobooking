import {randomNumber, randomFloat, createUserNumber, createRandomArray} from  './random-generators.js';

const TITLES = ['Great value, great location', '5 minutes to Kremlin', '5 blocks to the subway', 'Alice doesnt live here anymore', 'Next to rabbithole', 'Supermassive black hole']
const DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel']
const CHECKIN = ['12:00', '13:00', '14:00']
const CHECKOUT = ['12:00', '13:00', '14:00']
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const PHOTOMOCS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']

//ФУНКЦИЯ СОЗДАЕТ ОБЪЕКТ - ОБЪЯВЛЕНИЕ НЕДВИЖИМОСТИ
const createObject = () =>  {

  const USERN = createUserNumber(1,10); //Номер автара
  const offerTitle = TITLES[randomNumber(0, TITLES.length-1)]; //Заголовок объявления
  const offerPrice = randomNumber(10, 1000000);
  const offerType = TYPES[randomNumber(0,4)];
  const roomsNumber = randomNumber(1,20);
  const guestsNumber = randomNumber(1,10);
  const checkIn = CHECKIN[randomNumber(0,2)];
  const checkOut = CHECKOUT[randomNumber(0,2)];
  const featuresAvailable = createRandomArray(FEATURES);
  const offerDescription = DESCRIPTIONS[randomNumber(0, DESCRIPTIONS.length-1)];
  const randomPhotos = createRandomArray(PHOTOMOCS);
  const latitude = randomFloat(35.65000, 35.70000, 5);
  const longitude = randomFloat(139.70000, 139.80000, 5);

  return {
    author : `img/avatars/user${USERN}.png`,
    offer: {
      title: offerTitle,
      address: `${latitude} + ${longitude}`,
      price: offerPrice,
      type: offerType,
      rooms: roomsNumber,
      guests: guestsNumber,
      checkin: checkIn,
      checkout: checkOut,
      features: featuresAvailable,
      description: offerDescription,
      photos: randomPhotos
    },
    location: {
      lat: latitude,
      lng: longitude
    }
  }
}

//создает массив из объявлений
const createSimilarObjects = Array.from({length: 10}, createObject);

export {createSimilarObjects}
