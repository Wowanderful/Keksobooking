// console.log('Hi Bitch')
import {createSimilarObjects} from './moc.js';
import {createObject} from './moc.js';

const parent = document.querySelector('#map-canvas')
const template = document.querySelector('#card').content.querySelector('.popup');
const fragment = document.createDocumentFragment();

const renderSimilarThumb = (element) => {

    const newPost = template.cloneNode(true);
    newPost.querySelector('.popup__avatar').src = element.author.avatar;
    newPost.querySelector('.popup__avatar').alt = element.offer.title;
    newPost.querySelector('.popup__title').textContent = element.offer.title;
    newPost.querySelector('.popup__text--address').textContent = element.offer.address;
    newPost.querySelector('.popup__text--price').textContent = `$ ${element.offer.price} в сутки`;

    if (element.offer.type == 'house') {
      newPost.querySelector('.popup__type').textContent = 'Квартира'
    }    else if (element.offer.type == 'palace') {
      newPost.querySelector('.popup__type').textContent = 'Дворец';
    }
    else if (element.offer.type == 'house') {
      newPost.querySelector('.popup__type').textContent = 'Дом';
    }
    else if (element.offer.type == 'bungalow') {
      newPost.querySelector('.popup__type').textContent = 'Бунгало';
    }
    else if (element.offer.type == 'hotel') {
      newPost.querySelector('.popup__type').textContent = 'Гостиница';
    };

    newPost.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
    newPost.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}.`
    newPost.querySelector('.popup__features').textContent = element.offer.features;
    newPost.querySelector('.popup__description').textContent = element.offer.description;
    newPost.querySelector('.popup__photo').src = element.offer.photos;

    return newPost;
  };





export {renderSimilarThumb};



