const btnPopup = document.querySelector('.btnLogin-popup');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const btnClose = document.querySelector('.btn-close');
const btnClose2 = document.querySelector('.btn-close2');
const btnClosepop = document.querySelector('.btn-closepop');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnClose2.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnClosepop.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});



//LOGIN MODAL
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

//REGISTER MODAL

let popup2 = document.getElementById("popup2");

function openPopup2() {
    popup2.classList.add("open-popup2");
}
function closePopup2() {
    popup2.classList.remove("open-popup2");
}


var sidemeu = document.getElementById("sidemenu");

    function openmenu() {
        sidemeu.style.right = "0";
    }
    function closemenu() {
        sidemeu.style.right = "-200px";
    }


 
 var hamster = document.getElementById("preloader");

 window.addEventListener("load", function(){
    hamster.style.display = "none";
 })