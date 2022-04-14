// Массивы

const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
// const people = [
//     {name: 'Kate', budget: 4200},
//     {name: 'Lena', budget: 3500},
//     {name: 'ira', budget: 1700},]
// const fib = [1, 1, 2, 3, 5, 8, 13]
// cars.push ('Renault')
// cars.unshift('Volga')
//
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars)
//
// for (const person of people){
//     console.log(person)
// }

// const index = people.findIndex(function(person) {
// return person.budget ===3500
// })
// const person = people.find(function (person) {
//     return person.budget === 3500
// } )
// const person = people.find(person => person.budget === 3500)
// console.log(person)
//
// console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib)
// console.log(cars)
// const  filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// Задача 1
// const text = 'Привет, Андрей!'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Kate', budget: 4200},
    {name: 'Lena', budget: 3500},
    {name: 'ira', budget: 1700},
]
const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
    acc += person.budget
}, 0)
console.log(allBudget)
