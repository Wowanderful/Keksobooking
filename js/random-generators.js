//Функция, возвращающая случайное число
const randomNumber = (min, max) => {
  return (max < min) ? "Ошибка - неправильный дипозон чисел" : Math.floor(min + Math.random() * (max + 1 - min))
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const randomFloat = (min, max, number) => {
  const n = Math.random() * (max - min) + min;
  return (max < min) ? "Ошибка - неправильный диапозон чисел"
  : n.toFixed(number)
  }

  //функция для расчета номера автара
  function createUserNumber  (min, max)  {
    const previousValues = [];
    let currentValue = randomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
      }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumber(min, max);
      }
    previousValues.push(currentValue);

    const str = currentValue.toString();

    if (str.length > 1) {
      return str
      }
    else {
      return `0${str}`
    }
  };

//функция для создания произвольного массива из существующего
const createRandomArray = (arr) => {
  const newArray = []
  for (let i = 0; i <= randomNumber(1, arr.length); i++) {
    if (newArray.includes(arr[i]) == false) {
      newArray.push(arr[i])
    }
  }
  return newArray
};

export {randomNumber, randomFloat, createUserNumber, createRandomArray}
