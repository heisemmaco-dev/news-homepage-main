// the html tag 
let header = document.querySelector('header')
// the menu button
let menuButton = document.querySelector('.toggler')
// add event listener to the button
menuButton.addEventListener('click', () => {
    header.classList.toggle('showHiddenItem')
})