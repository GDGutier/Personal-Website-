//nav bar toggle button 
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


//writing script on home screen 
const textArray = ["Creative", "Software Developer", "Artist", "Leader"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;
const typedTextSpan = document.querySelector(".typed-text");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }

    else {
        setTimeout(erase, newTextDelay);

    }

}
function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay + 250);
});


//change content on about me 
const weatherTitle = "Weather Forecaster";
const weatherBlurb = "Weather Blurb";
const mngTitle = "Management";
const mngBlurb = "Management blurb";
const dsgTitle = "Design Assistant";
const dsgBlurb = "Design assistant blurb";
const aboutTitle = " About Me";
const aboutBlurb = "About me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulaboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.blurb";
const aboutmeTitle = document.getElementById("aboutmeHeader");
const weatherClick = document.getElementById("weather_link");
const aboutmeBlurbs = document.getElementById("aboutmeblurbs");


function reWrite(navitem, description) {

    aboutmeTitle.innerHTML = navitem;
    aboutmeBlurbs.innerHTML = description;




}
//weatherClick.addEventListener('click', reWrite());



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}