const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.getElementById('price');

function setupSlider () {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: valueElement.placeholder,
    step: 100,
    connect: 'lower',
  })

  sliderElement.noUiSlider.on('update', (...rest) => {
    valueElement.value = sliderElement.noUiSlider.get();
  });
}

export {setupSlider}
