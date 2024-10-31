  const adform = document.querySelector('.ad-form');
  const mapfilter = document.querySelector('.map__filters');
  const activeFormElements = adform.querySelectorAll('fieldset');
  const activeFilterElements = mapfilter.querySelectorAll('fieldset');
  const activeFilterSelectors = mapfilter.querySelectorAll('select');



function makeInactive () {

  adform.classList.add('add-form--disabled');
  mapfilter.classList.add('map__filters--disabled');

  for (let i of activeFormElements) {
    i.setAttribute('disabled', '')
  };
  for (let i of activeFilterElements) {
    i.setAttribute('disabled', '')
  };
  for (let i of activeFilterSelectors) {
    i.setAttribute('disabled', '')
  };

}

function makeActive () {
  adform.classList.remove('add-form--disabled');
  mapfilter.classList.remove('map__filters--disabled');

  for (let i of activeFormElements) {
    i.removeAttribute('disabled', '')
  };
  for (let i of activeFilterElements) {
    i.removeAttribute('disabled', '')
  };
  for (let i of activeFilterSelectors) {
    i.removeAttribute('disabled', '')
  };
}

export {makeInactive, makeActive}
