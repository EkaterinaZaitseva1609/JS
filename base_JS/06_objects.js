//Объекты  - объекты мы создаем через фигурные скобки
const person = {
    name: 'Katya',
    age: undefined,
    isProgrammer: true,
    languages: ['ru', 'en'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1+3)]: 'Computed Key',
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log('информация о человеке по имени:', this.name)
    }
}
// console.log(person.name)
// const ageKey = 'age'
// console.log(person['age'])
// console.log(person['complex key'])
// person.greet()
// person.age++
// person.language.push('pl')
// // delete  person['key_4']
//
// console.log(person)
// console.log(person['key_4'])

// person['key_4'] = undefined

// const name = person.name
// const age = person.age
// const languages = person.language

// const {name, age: personAge = 17, languages} = person
// console.log(name, personAge, languages)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }
// }

// Контекст
// person.info()

const logger = {
    keys(obj) {
        console.log('Obhect Keys: ', Object.keys(this))
    }
}
withParents(top = folse, between = folse, bottom = folse) {
if (top) {
    console.log('---Start---')
}
}