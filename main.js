// the html tag 
let header = document.querySelector('header')
// the menu button
let menuButton = document.querySelector('.toggler')
let nav = document.querySelector('nav')
// add event listener to the button
/* menuButton.addEventListener('click', () => {
    header.classList.toggle('showHiddenItem')
    nav.classList.toggle('slice-out')
    nav.classList.toggle('slide-in')
}) */

menuButton.addEventListener('click', () => {
    if (!header.classList.contains('showHiddenItem')) {
     /*  slideContainer.classList.remove('hidden');
      slideContainer.classList.add('slide-in'); */
      header.classList.add('showHiddenItem')
      nav.classList.remove('slide-out')
      nav.classList.add('slide-in')
    } else {
        console.log('hi, you are welcome');
        
     
        nav.classList.remove('slide-in')
        nav.classList.add('slide-out')

      setTimeout(() => {
        header.classList.remove('showHiddenItem')
      }, 1000); 
    }
  });