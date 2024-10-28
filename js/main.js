console.log('Hello bitch')

//Функция, возвращающая случайное число
const randomNumber = (min, max) => {
  return (max < min) ? "Ошибка - неправильный дипозон чисел" : Math.floor(min + Math.random() * (max + 1 - min))
}


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const randomFloat = (min, max, number) => {
  n = min + Math.random() * (max + 1 - min)
  return (max < min) ? "Ошибка - неправильный диапозон чисел"
  : n.toFixed(number)
  }

console.log(randomFloat(3, 10, 4))


