// import {createMainMarker} from './api.js';

const body = document.querySelector('body');

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

//Success message
const closeUserModal = () => {
  const success = document.querySelector('.success');
  success.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onClickClose);
}

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const onClickClose = (evt) => {
  evt.preventDefault();
  closeUserModal();
}

const createSuccess = () => {
  const template = document.getElementById('success').content.querySelector('.success');
  const successAlert = template.cloneNode(true);
  body.appendChild(successAlert);
  document.querySelector('.ad-form').reset();

}

const successMessage = () => {
  createSuccess();
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onClickClose);
};

//Error Message
const closeErrorModal = () => {
  const error = document.querySelector('.error');
  error.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onClickCloseError);
}

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorModal();
  }
};

const onClickCloseError = (evt) => {
  evt.preventDefault();
  closeErrorModal();
}

const createError = () => {
  const template = document.getElementById('error').content.querySelector('.error');
  const errorAlert = template.cloneNode(true);
  body.appendChild(errorAlert);
}

const errorMessage = () => {
  createError();
  document.addEventListener('keydown', onErrorEscKeydown);
  document.addEventListener('click', onClickCloseError);
};

export {successMessage, errorMessage}
