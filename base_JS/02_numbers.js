// 1 Number
// const num = 42 // integer - целочисленный тип
// const float = 42.42 //float - число, которое содержет в себе десятичную часть (точка)
// const pow = 10e3 // валидное число - 10 возводим в 3 степеь
//
// console.log('Max_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) //Максимальное целое число, которое можно безопасно использовать в JavaScript (253 - 1).
// console.log('Math.pow 53', Math.pow(2,53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER) //Минимальное целое число, которое можно безопасно использовать в (-(253 - 1)).
// console.log('MAX_VALUE', Number.MAX_VALUE) //Наибольшее представимое положительное число.
// console.log('MIN_VALUE', Number.MIN_VALUE) //Наименьшее представимое положительное число — то есть, самое близкое к нулю положительное число (которое ещё не является нулём).
// console.log(Number.NaN) //Специальное значение для представления «не числа».
// const wierd = 2 / undefined
// console.log(2 * undefined)
// console.log(Number.isNaN(42)) //Определяет, является ли переданное значение значением NaN
// console.log(Number.isFinite(Infinity)) //Определяет, является ли переданное значение конечным числом.
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
//
// console.log(Number.parseInt(stringFloat) + 2) //parseInt работает с Integer отметает дроби
// console.log(Number.parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) //0.6
// console.log(+(0.4 + 0.2).toFixed (1))
// console.log(parseFloat((0.4 + 0.2).toFixed (1)))
//

// 2 BigInt это встроенный объект, который предоставляет способ представлять целые числа больше 253 - 1 - Number.MAX_SAFE_INTEGER.

// console.log(90071992547409919n - 9007199254740991n)
// console.log(-90071992547409919n - -9007199254740991n)

// console.log(10n-2) /нельзя смешивать BigInt и Number
// console.log(parseInt(10n) -4) // если нужно получить Number
// console.log(10n-BigInt(4))  //если нужно получить BigInt
// console.log(5n / 2n)

//3 Math Объект Math является встроенным объектом, хранящим в своих свойствах и методах различные математические константы и функции. Объект Math не является функциональным объектом.Math не работает с числами типа BigInt.

// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
//
// console.log(Math.max(42, 12,23, 11,422))
// console.log(Math.min(42, 12,23, 11,422))

// 4 Example

// function getRandomBetween(min, max) {
//     const number = Math.random();
//     console.log(number)
//     console.log(number * (max - min + 1))
//     console.log(number * (max - min + 1) + min)
//     return Math.floor(number * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42))
