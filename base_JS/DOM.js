// Работа с DOM - Document Object Model», коротко DOM
//это представление HTML-документа в виде дерева тегов
// window.alert('1')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] // устаревший метод
// const heading2 = document.getElementsByClassName('h2-class')// устаревший метод
// const heading2= document.querySelector('.h2-class') // актуальный метод, более универсальный, поиск по классу
const heading2= document.querySelector('#sub-hello') //поиск по id. querySelector возвращает всегда 1 элемент

console.log(heading2)
console.dir(heading.textContent)
// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length - 1]
console.log(heading3)
heading.textContent = 'Changed from JS'

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))

    window.location = url
})

    setTimeout(() => {
    addStylesTo(link, 'Практикуйся', 'yellow')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2,'И все получится!', 'blue','2rem')
}, 4500)



function  addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color =color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'lightBlue'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }

}

heading.onclick = () => {
   if (heading.style.color ==='red') {
       heading.style.color = '#000'
       heading.style.background = 'green'
   } else {
       heading.style.color = 'red'
       heading.style.background = '#000'
   }
}

heading2.addEventListener('dblclick', () =>{
    if (heading2.style.color ==='yellow') {
        heading2.style.color = '#000'
        heading2.style.background = 'green'
    } else {
        heading2.style.color = 'red'
        heading2.style.background = '#000'
    }
})