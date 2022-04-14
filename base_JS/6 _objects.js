//Объекты

const person ={
    name: 'Ekaterina',
    age: 32,
    isStudent: true,
    Languages: ['ru', 'en'],
    greet() {
        console.log('greet from person')
    }
}
// console.log(person.name)
// console.log(person['age'])

// const name = person.name
// const age = person.age
// const languages = person.Languages

// const {name, age, Languages} = person
// console.log(name, age, Languages)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value', person[key])
//     }
// }

// const keys = Object.keys(person)
// keys.forEach((key)=> {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })

// Context

// const logger = {
//     keys() {
//         console.log('Object Keys:', Object.keys(this))
//     }
// }
// const bound = logger.keys.bind(logger)
// bound()

// logger.keys.call(person)


