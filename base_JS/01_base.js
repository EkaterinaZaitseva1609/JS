// 1 Переменные
// (variable - var) - создавая перементтые через var, мы можем их м

// const firstName  = 'Katya'
// const age = 32
// const lastName = 'Zaitseva' // string
// const  мы изменить не можем, как var
// let age = 32 //number
// let  - таким образом созданная переменная может изменяться также как и var
// name = 'Katerina'

 // Предпочтительно использовать const
//  const isProgrammer = true // boolean
// console.log(isProgrammer)

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age) //конкатенирование (склеивание объектов линейной струк-ры, оычно строк)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt ('Введите фамилию') //возвращает значение
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2022
// const birthYear = 1989

// const age = currentYear - birthYear

// const a = 10
// const b = 5
// console.log(a + b)
//
// let c = 32
// c = c + a эту операцию мы можем сократить, написав
// c += a
// c /= b
// console.log(c)

// console.log(currentYear++) // оператор ++ инкрементирует (увеличивает значение переменной)
// console.log(++currentYear)
// console.log(currentYear--) //--деинкрементирует
// console.log(--currentYear)

// 4 Типы данных (примитивы в языке)
// const isProgrammer = true
// const name = 'Katya'
// const age = 32
// let x
//
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 32
// const birthYear = 1989
// const currentYear = 2022
//
// // > < >= <=
// const isFullAge = (currentYear - birthYear) >= fullAge //26 >= 27 => true
// console.log(isFullAge)

// 6 Условные операторы

// const courseStatus = 'fail' //ready. fail, pending
//
// if (courseStatus === 'ready') { //=== лучше использовать такое равно, исключает возможность ошибки
//     console.log('Курс готов')
// } else if (courseStatus === 'pending') {
//     console.log('Курс находится в разработке')
// } else {
//     console.log('Курс стартует в следующем году')
// }

// const isReady = true

// if (isReady) {
//     console.log('Все готово')
// }else {
//     console.log('Все не готово')
// }

// Тернарное выражение - используется для простых условий
// isReady ? console.log('Все готово') :console.log('Все не готово')


// const num1 = 42 //number
// const num2 = '42' //string
//
// console.log(num1 === num2)

// 7. Булевая логика

// 8. Функции
// function calculateAge (year) {
//     return 2022 - year
// }

// console.log(calculateAge (1989))
// console.log(calculateAge (1984))
// console.log(calculateAge (1969))
// console.log(calculateAge (2006))
// console.log(calculateAge (1925))
// console.log(calculateAge (1917))

// function  logInfoAbout (name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее')
//     }
// }
// logInfoAbout('Katya', 1989)
// logInfoAbout('Katya', 2025)

// 9. Массивы - правдильно создавать массивы через квадратные скобки
// const cars = ['Mazda', 'Mercedes', 'Ford']
// console.log(cars)
// const cars = new Array('Mazda', 'Mercedes', 'Ford')
// console.log(cars.length) // проверить длину массива через .length
// console.log(cars[1]) // проверить под каким индексом находиться в массиве
// console.log(cars[0])
//
// cars[0] = 'Porsche'
// console.log(cars[0])
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Mazda', 'Mercedes', 'Ford','Porsche']
//
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }
// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты (в объект мы группируем различные значения, в отличае от массива когда мы создаем группу,
// в объектах создаем разные структуры

// const person = {
//   firstName: 'Kate',
//     lastName: 'Zaitseva',
//     year: '1989',
//     languages: ['Ru', 'En'],
//     hasHusband: true,
//     greet: function () {
//         console.log('greet')
//     }
//
// }
//
// console.log(person.firstName)
