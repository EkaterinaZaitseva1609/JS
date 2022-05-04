// 1 Function каждая JavaScript-функция является объектом Function. Это легко проверить, выполнив проверку (function(){}).constructor === Function, которая вернёт true.
//  в JS присутствует несколько способов создания функции

//Function Expression (создаем функцию и складываем ее в переменную), не можем получить доступ к функции до ее инициализации
// const greet2 = function greet2(name) {
//     console.log('Hello 2 - ', name)
// }
// greet('Lena')
// greet2 ('Lena')

//Function Decloration (к этой функции мы можем обращаться когда захотим)
// function greet(name) {
//     console.log('Hello - ', name)
// }

// console.log(typeof greet)
// console.dir(greet)

//2 Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval) //clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции - упрошает взаимодействие с функциями

function greet(name) {
   // console.log('Hello - ', name)
}

const arrow = (name) => {
    // console.log('Hello - ', name)
}
const arrow2 = name => console.log('Hello - ', name)

arrow2('Katya')

const pow2 = num => num ** 2

// console.log(pow2(5))

// 4 Параметры по умолчанию

// const sum = (a = 40, b = a * 2) => a + b
//
// console.log(sum(41))
//
//
// function sumAll(...all) {
//     const result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
//
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкание

// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName)
//     }
// }
// const logWithLastName =  createMember ('Katya ')
// console.log(logWithLastName('Zaitseva'))
// console.log(logWithLastName('Yarmoluk'))
