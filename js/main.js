console.log('Hello bitch')

TITLES = ['Great value, great location', '5 minutes to Kremlin', '5 blocks to the subway', 'Alice doesnt live here anymore', 'Next to rabbithole', 'Supermassive black hole']
DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']
TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel']
CHECKIN = ['12:00', '13:00', '14:00']
CHECKOUT = ['12:00', '13:00', '14:00']
FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
PHOTOMOCS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']

//Функция, возвращающая случайное число
const randomNumber = (min, max) => {
  return (max < min) ? "Ошибка - неправильный дипозон чисел" : Math.floor(min + Math.random() * (max + 1 - min))
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const randomFloat = (min, max, number) => {
  n = min + Math.random() * (max + 1 - min)
  return (max < min) ? "Ошибка - неправильный диапозон чисел"
  : +n.toFixed(number)
  }

  //функция для расчета номера автара
  const createUserNumber = (min, max) => {
    let str = randomNumber(min, max).toString()
    if (str.length > 1) {
      return str
    }
    else {
      return `0${str}`
    }
  }
const createRandomArray = (arr) => {
  const newArray = []
  for (let i = 0; i <= randomNumber(1, arr.length); i++) {
    if (newArray.includes(arr[i]) == false) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

const USERN = createUserNumber(1,10); //Номер автара
const offerTitle = TITLES[randomNumber(0, TITLES.length+1)]; //Заголовок объявления
const offerPrice = randomNumber(10, 1000000);
const offerType = TYPES[randomNumber(0,4)];
const roomsNumber = randomNumber(1,20);
const guestsNumber = randomNumber(1,10);
const checkIn = CHECKIN[randomNumber(0,2)];
const checkOut = CHECKOUT[randomNumber(0,2)];
const featuresAvailable = createRandomArray(FEATURES);
const offerDescription = DESCRIPTIONS[randomNumber(0, DESCRIPTIONS.length+1)];
const randomPhotos = createRandomArray(PHOTOMOCS);
const latitude = randomFloat(35.65000, 35.70000, 5);
const longitude = randomFloat(139.70000, 139.80000, 5);

const createObject = () =>  {
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

const createSimilarObjects = Array.from({length: 10}, createObject)

console.log(createSimilarObjects)


