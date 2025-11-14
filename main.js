/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle');

/* Menu show - hidden */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navToggle.classList.remove('animate-toggle');
    navMenu.classList.remove('show-menu')
};

navLink.forEach((n) => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
      header.classList.add('bg-header');
    } else {
      header.classList.remove('bg-header');
    }
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); 

const scrollActive = () => {
    const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
     sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive)


/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper('.services-swiper', {
    spaceBetween: 32,
    grabCursor: true, // shows a grabbing hand cursor
    
        mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },

    breakpoints: {
       768: {
         slidesPerView: 2,
         },
         1208: {
          slidesPerView: 3,
        },
    },
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
document.addEventListener("DOMContentLoaded", function () {
  var mixer = mixitup('.work-container', {
    selectors: {
      target: '.mix',
    },
    animation: {
      duration: 300
    }
  });
});


/* Active work */
const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach((a) => {
        a.classList.remove('active-work');
    });

    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));



/*=============== TESTIMONIALS SWIPER ===============*/
var testimonialsSwiper = new Swiper('.testimonials-swiper', {
    spaceBetween: 32,
    grabCursor: true, // shows a grabbing hand cursor
    
        mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },

    breakpoints: {
       768: {
         slidesPerView: 2,
         },
         1208: {
          slidesPerView: 3,
        },
    },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        message.classList.remove('color-first');
        message.classList.add('color-red')
        message.textContent = 'Write all the input fields';

        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm('service_97vwy3a', 'template_8wkzxl4', '#contact-form', 'gi3r464WjfTv0YX0G')
            .then(
                () => {
                    message.classList.add('color-first');
                    message.textContent = 'Message sent ✔';

                    setTimeout(() => {
                        message.textContent = '';
                    }, 5000);
                },
                (error) => {
                    alert('OOPs! SOMETHING WENT WRONG...', error);
                },
            );
            contactName.value = '';
            contactEmail.value = '';
            contactSubject.value = '';
            contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);


/*=============== LIGHT/DARK MODE ===============*/
let currentTheme ='light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
    input.addEventListener('change' , () => {
        currentTheme= input.value;
        document.body.className = currentTheme;

    })
})

// Save
localStorage.setItem('theme', currentTheme);

// Load on startup
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    currentTheme = savedTheme;
    document.body.className = savedTheme;
    document.querySelector(`input[value="${savedTheme}"]`).checked = true;
}

mixer.on('mixEnd', function () {
  document.querySelectorAll('.youtube-video').forEach(div => {
    if (!div.querySelector('iframe')) {
      const videoId = div.dataset.videoId;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
      iframe.width = '100%';
      iframe.height = '315';
      iframe.frameBorder = '0';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      div.innerHTML = '';
      div.appendChild(iframe);
    }
  });
});

