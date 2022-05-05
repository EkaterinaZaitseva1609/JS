// Массивы - (Array) в JavaScript является глобальным объектом, который используется для создания массивов; которые представляют собой высокоуровневые спископодобные объекты.

// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
// // const people = [
// //     {name: 'Katya', budget: 4200},
// //     {name: 'Lena', budget: 3500},
// //     {name: 'Nastya', budget: 1700},
// // ]
// const fib = [ 1, 1, 2, 3, 5, 8, 13]
// //Function
// function addItemToEnd () {
//
// }
// Method
// cars.push('Lada')
// cars.unshift('Volga')
// const firstCar = cars.shift()
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// console.log(cars.indexOf('BMW')) //indexOf - возвращает индехс того элемента, еоторый мы ищем
// const index = cars.indexOf('BMW')
// cars[index] = 'Volga'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)
// const index = people.findIndex(function (person) {
//   return person.budget === 3500
// })
// console.log(people)

// console.log(cars.includes('Mazda')) // С помощью includes проверяем наличие какого-либо элемента в массиве

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)

// const pow2Fib = fib.map(pow2)
// const filterNumbers = pow2Fib.filter(num => {
//     return num > 20
// })
// console.log(pow2Fib)
// console.log(filterNumbers)


// console.log(pow2Fib)
// console.log(cars)

//Задача 1
// const text = 'Привет, я изучаю JS'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
// const people = [
//     {name: 'Katya', budget: 4200},
//     {name: 'Lena', budget: 3500},
//     {name: 'Nastya', budget: 1700},
// ]
// const allBudget =  people.reduce ((acc, person)  => {
//     if (budget.budget > 2000) {
//     acc += person.budget
//     return acc
// }, 0)
// console.log(allBudget)