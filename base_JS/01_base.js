// 1 Переменные
// camelCase
// const firstName = 'Ekaterina'
// //const age = 32 // number
// const jsProgrammer = true //boolean
//
// const _private = 'privat'
// const $ = 'some value'
// const withNum5 = '5'

// 2 Мутирование
//console.log('Persons name: ' + firstName + ', and persons age: ' + age)
//alert('Persons name: ' + firstName + ', and persons age: ' + age)

//const lastName = prompt('Enter last name')
//alert(firstName + ' ' + lastName)

// 3 Операторы


//const age = currentYear - birthYear


//c += a
//c -= a
//c *= a
//c /= a


// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Ekaterina'
// const age = 32
//  let x
//  null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
//  console.log(typeof x)
//  console.log(typeof null)

// 5 Приоритет оператора
//  const fullAge = 32
//  const birthYear = 1989
//  const currentYear = 2022
//
//  const isFullAge = currentYear - birthYear >= fullAge //32 >= 33 => true
//  console.log(isFullAge)

 // 6 Условные операторы

//  const courseStatus = 'fail' //ready, fail, pending
//
//  if (courseStatus === 'ready') {
// console.log('Курс уже готов и его можно проходить')
//  } else if (courseStatus === 'pending') {
//      console.log('Курс находиться в процессе разработки')
//  } else {
//      console.log('Курс не получился')
//  }
//
//  const isReady = false

 // if (isReady) {
 //     console.log('Все готово!')
 // } else {
 //     console.log ('Все не готово')
 // }
// //Тернарное выражение
//  isReady ? console.log('Все готово!') : console.log('Все не готово')

//  const num1 = 42 //number
//  const num2 = '42' //string
// console.log (num1 === num2 )

 // 7 Булевая логика

 // 8 Функции
 // function  calculateAge(year) {
 //    return 2022 - year


 // console.log(calculateAge(year: 1989))
 // console.log(calculateAge(year: 1993))
 // console.log(calculateAge(year: 1999))

//  function logInfoAbout(name, year) {
//      const age = calculateAge(year)
//
//      if (age > 0) {
//          console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//      } else {
//          console.log('Вообще-то это уже будущее')
//      }
//  }
//
// logInfoAbout("Ekaterina", '1989')
//  logInfoAbout("Andrey", '1984')
//  logInfoAbout("Maria", '2023')

 //9 Массивы
//  const cars = ['BMW', 'Nisan', 'Lexus']
// // const cars = new Array('BMW', 'Nisan', 'Lexus')
//  console.log(cars.length)
//
//  console.log(cars[1])
//  console.log(cars[0])
//  console.log(cars[2])
//
//  cars[1] = 'Porsche'
//  cars[cars.length] = 'Mazda'
//  console.log(cars)

 // 10 Циклы
 // const cars = ['BMW', 'Nisan', 'Lexus', 'Porsche']

 // for (let i = 0; i < cars.length; i++) {
 //     const car = cars[i]
 //     console.log(car)
 // }

 // for (let car of cars) {
 //     console.log(car)
 // }

// 11 Объкты
const person = {
    firstName: 'Ekaterina',
    lastName: 'Zaitseva',
    year: 1989,
    Languages: ['Ru', 'En'],
    hasHusband: true,
    greet: function () {
        console.log('greet for person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
 console.log(person[key])
 person.greet()

