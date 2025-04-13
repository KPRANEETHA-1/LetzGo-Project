
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);


const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

function togglePlayPause() {
    if (videoFile.paused || videoFile.ended) {
        playVideo();
    } else {
        pauseVideo();
    }
}

function playVideo() {
    videoFile.play();
    videoIcon.classList.remove('ri-play-line');
    videoIcon.classList.add('ri-pause-line');
}

function pauseVideo() {
    videoFile.pause();
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}

function resetVideoIcon() {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}

videoButton.addEventListener('click', function() {
    togglePlayPause();
});

videoFile.addEventListener('ended', function() {
    resetVideoIcon();
});


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
});

sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
});

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`, {
    origin: 'left',
});

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`, {
    origin: 'right',
    interval: 100,
});
