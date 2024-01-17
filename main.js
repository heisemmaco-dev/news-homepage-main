// the html tag 
let header = document.querySelector('header')
// the menu button
let menuButton = document.querySelector('.toggler')
let nav = document.querySelector('nav')
// add event listener to the button

menuButton.addEventListener('click', () => {
    //menuButton.classList.toggle('changeBtnImage')
    if (!header.classList.contains('showHiddenItem')) {
      header.classList.add('showHiddenItem')

      menuButton.classList.add('changeBtnImage')

      nav.classList.remove('slide-out')
      nav.classList.add('slide-in')
    } else {
        nav.classList.remove('slide-in')
        nav.classList.add('slide-out')

        menuButton.classList.remove('changeBtnImage')

      setTimeout(() => {
        header.classList.remove('showHiddenItem')
      }, 600); 
    }
  });

  // tha auchor tag, i want to disappear when the anyone being clicked

  let aTag = document.querySelectorAll('nav a')

  aTag.forEach(anchorTAg => {
    anchorTAg.addEventListener('click', () => {

       if (header.classList.contains('showHiddenItem')) {
        nav.classList.remove('slide-in')
        nav.classList.add('slide-out')
        menuButton.classList.remove('changeBtnImage')

      setTimeout(() => {
        header.classList.remove('showHiddenItem')
      }, 600);
      }
    })
  })