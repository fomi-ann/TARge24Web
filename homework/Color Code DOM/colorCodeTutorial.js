/*
React:
- Function components
- Class components

Vue / Angular:
- Directives

JQuery
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
DOM API is part of Web APIs. DOM was one of the first to get standardized and implemented into almost every browser.
DOM (Document Object Model) is the whole tree of HTML nodes, pure data representation of what is rendred in the browser.
With DOM API we can access all of these elements directly using JavaScript:
- Elements
- Content
- Attributes
- Event Listeners
- Create Elements
-Add / Remove elements from DOM
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
*/

// Access the whole page document:
const x = { document }
console.log(x);

const a = document.head
console.log(a)

const b = document.body
console.log(b);

// Access the body element (in console):
// { c: document.body }
// # body element has same methods as document

// innerHTML
// #body html

// childNodes
// children
// #child nodes that are directly under body

// function example
// document.onclick = () => {
//     console.log('HELLO DOM!');
// }

// Add element to the DOM:
document.body.append('NEW ELEMENT')

// This gives error message: Parameter 1 is not of type 'Node'
// document.body.appendChild('ANOTHER NEW ELEMENT')

// Needs a tag / local name --> h1
const myHeading = document.createElement('h1') // create a h1 element
document.body.appendChild(myHeading) // add empty <h1></h1> tag to the body
myHeading.innerText = 'HEADER TEXT' // add text to the h1 header
// myHeading.innerText = 'NEW HEADER TEXT' // access again to change the header text

// Clear all body text
// document.body.innerText = ''

const now = new Date() // now is the object that represents current date / moment
myHeading.innerText = `${now.getHours()}:${now.getMinutes()}` // get the current hours and minutes

// TODO app

// --------------------------------------------
// Bad example w\ HTML semantic:
/*
// Input field
const input = document.createElement('input')
input.placeholder = 'STUFF TO DO'
document.body.appendChild(input)

// Button
const button = document.createElement('button')
button.innerText = 'ADD'
document.body.appendChild(button)

// Events
button.addEventListener('click', () => {
    console.log("OUCH!");
})

button.addEventListener('click', () => {
    const div = document.createElement('div')
    div.innerText = input.value
    document.body.appendChild(div)
    input.value = ''
})
*/
// --------------------------------------------


// --------------------------------------------
// Good example w/ HTML semantic
// Here we are using form which has some buit in functionality
const form = document.createElement('form')
document.body.appendChild(form)

const input = document.createElement('input')
input.placeholder = 'STUFF TO DO'
form.appendChild(input)

const button = document.createElement('button')
button.innerText = 'ADD'
button.role = 'ADD'
form.appendChild(button)

const ul = document.createElement('ul')
document.body.appendChild(ul)

const removeElement = el => {
    el.remove()
}

// Since we used form, we can submit using 'enter'
form.onsubmit = e => {
    e.preventDefault() // prevents the reload of page after submitting since the form doen't have a redirection link
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerText = input.value
    li.onclick = removeElement.bind(null, li)
    input.value = ''
}
// --------------------------------------------


// CSS attributes
document.body.style.padding = '16px'
input.style.marginRight = '8px'
document.body.style.backgroundColor = '#f0f0f0'

// Shows all the attributes for body
const d = document.body.attributes
console.log(d)

// Apply styles
document.body.setAttribute('class', 'blue')

// Query the DOM
// Console:
document.getElementsByClassName('blue')

ul.setAttribute('class', 'blue')

document.getElementsByTagName('li')
document.querySelectorAll('blue')
document.querySelectorAll('li')