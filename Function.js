// 1 Функции
// (Function Declaration)
// function greet(name) {
//     console.log('Hello - ', name)
// }
// //  (Function Expression)
// const greet2 = function greet2(name) {
//     console.log('Hello 2 -', name)
// }

// greet('Lena')
// greet2('Olga')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 50
// const interval = setInterval(function () {
//     if (counter ===54) {
//         clearInterval(interval)
//     }else {
//         console.log(++counter)
//     }
// }, 2000)

// 3  Стрелочные функции

function greet(name) {
    console.log('Hello - ', name)
}
    const arrow = (name, age) => {
        console.log('Hello - ', name, age)
    }

  const arrow2 = name => console.log('Hello - ', name)
const arrow3 = age => console.log('i have- ', age)

// arrow2 ('Andrey')
// arrow3 (37)

const pow2 = num => num ** 2
// console.log(pow2(5))

// 4 Параметры по умолчанию

const sum = (a = 40, b = 1) => a + b
console.log(sum(41, 5))

// 5 Замыкание
function createMember(name) {
    return function (lastName) {
        console.log(name +lastName)
    }
}
const logWithLastName = createMember('Ekaterina')
console.log(logWithLastName('Zaitseva'))
console.log(logWithLastName('Yarmoluk'))
