// Асинхронность (js - однопоточный язык)
//Event Loop

// const timeout = setTimeout( () => {
//     console.log('After timeout')
// }, 2500)
// clearTimeout((timeout))
//
// const interval = setTimeout( () => {
//     console.log('After timeout')
// }, 1000)
// clearTimeout((timeout))
// clearTimeout((interval))

// const delay = (calback, wait = 1000) => {
//     setTimeout(calback, wait)
// }
// delay(() => {
//     console.log('After 2 seconds')
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject( 'Что-то пошло не так. Повторите попытку')
    }, wait)
    })
return promise
}

delay(2500)
    .then(() => {
        console.log('After 2 seconds')
    })
.catch(err => console.error('Error:', err))
.finally(() => console.log('Finally'))

const getData = () => new Promise (resolve => resolve ([
    1, 1, 2, 3, 5, 8, 13
]))
getData().then(data => console.log(data))
