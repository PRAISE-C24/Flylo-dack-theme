
//costom Dom objects
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-content');
const error = document.querySelector('.error');
const input = document.querySelector('#input');
const btn = document.querySelector('.btn');
const menuContent = document.querySelector('.menu-content');


//close menu on click
menuContent.addEventListener('click', ()=>{
    menu.classList.remove('showMenu')
})

//menu drop down on click(toggle)
menuIcon.addEventListener('click', (e) =>{
   if(!menu.classList.contains('showMenu')){
     menu.classList.add('showMenu')
   }else{menu.classList.remove('showMenu')}
})

//email verification on click
btn.addEventListener('click', ()=>{
    const email = input.value.toLowerCase();
    const emailRegex = /^[a-z]+\d+\@[a-z]+\.[a-z]{3}/gm;

    if(email.length === 0){
        error.textContent = "email can not be empty"
    }else if(!emailRegex.test(email)){
        error.textContent = "please enter a valid email address"
    }else{error.style.color = "#3CCF4E"
        error.textContent = 'Thank You For Your Partronage.'}
})

//erasing the error msg with a click
input.addEventListener('click', () => error.textContent = ' ')