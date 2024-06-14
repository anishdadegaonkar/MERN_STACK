// Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// remove menu mobile 
const navLink = document.querySelectorAll('.nav__link');

const linkAction =() =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// Change background header
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

// EMAIL JS
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4dk3qux','template_6fz6d8h','#contact-form','C40CKk7a2w5dT3aBT')
    .then(() => {
        contactMessage.innerHTML = 'Thanks for contacting us, we will get back to you soon!';
        setTimeout(() => {
            contactMessage.textContent= ''
        },5000)

        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.innerHTML = 'Something went wrong, please try again!';
        setTimeout(() => {
            contactMessage.textContent= ''
        },5000)
    })
}

contactForm.addEventListener('submit', sendEmail);

// Scroll up
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scrollup');
    if(this.scrollY >= 350){
        scrollUpBtn.classList.add('show-scroll');
    }else{
        scrollUpBtn.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollUp);

// Scroll section active link
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        sectionId = current.getAttribute('id');
        if(scrollDown >= sectionTop && scrollDown <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll',scrollActive);

// Dark Theme
const themebutton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themebutton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add' :'remove'](darkTheme)
    themebutton.classList[selectedIcon === 'ri-moon-line'? 'add' :'remove'](iconTheme)
}

themebutton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themebutton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay : 400,
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`,{origin:'right'})
sr.reveal(`.home__name , .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`,{origin:'left'})
sr.reveal(`.services__card, .projects__card`,{interval:50})
