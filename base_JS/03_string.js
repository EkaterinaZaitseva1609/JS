// const name = "Екатерина"
// const age = 32
// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Hello! My name ${name} and my age ${age< 30 ? 'A': 'B'} years old.`
// console.log(output)

// const output = `
// <div>This is div</div>
// <p> This is p</p>
// `
// console.log(output)

// const name = "Екатерина"
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(5))
// console.log(name.indexOf('кат'))
// console.log(name.startsWith('рин'))
// console.log(name.toLowerCase().startsWith('екат'))
// console.log(name.repeat(4))
// const  string = '         password        '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0)  {
        age = "Еще не родидся"
    }
        console.log(s, name, age)
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Ekaterina'
const personName2 = 'Ярослав'
const personAge = 32
const personAge2 = -10
const output = logPerson`Name: ${personName}, Age: ${personAge}`
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}`
console.log(output)
console.log(output2)
