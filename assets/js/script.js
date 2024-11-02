
//first page - center
const presentation = document.querySelector(".presentation");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1)

let timeout;
document.addEventListener('mousemove', ({ x, y }) => {
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        presentation.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

        [].forEach.call(images, (image) => {
            image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        });

        [].forEach.call(backgrounds, (background) => {
            background.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`;
        })
    })
}, false);


//hamburger

document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger');
    var menu = document.getElementById('menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('activeHamburger');
    });
});

// portfolio presentation
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);

        document.querySelectorAll('.img').forEach(img => {
            img.style.width = '300px';
            img.style.height = '300px';
            img.style.filter = 'blur(2px)';
            img.style.borderRadius = '0px';
            img.style.opacity = '0.2';
        });

        document.querySelectorAll('.button').forEach(button => {
            button.style.width = '305px';
            button.style.height = '305px';
            button.style.backgroundColor = 'rgba(45, 45, 45, 0.8)';
            button.style.filter = 'blur(2px)';
            button.style.borderRadius = '0px';
            button.style.opacity = '0.2';
        });

        const imgToActivate = document.querySelector(`#img${targetId.slice(-1)}`);
        const buttonToActivate = document.querySelector(`#button-${targetId.slice(-1)}`);

        imgToActivate.style.width = '585px';
        imgToActivate.style.height = '585px';
        imgToActivate.style.filter = 'blur(0px)';
        imgToActivate.style.borderRadius = '50px';
        imgToActivate.style.opacity = '1';

        buttonToActivate.style.width = '585px';
        buttonToActivate.style.height = '585px';
        buttonToActivate.style.backgroundColor = 'transparent';
        buttonToActivate.style.filter = 'blur(0px)';
        buttonToActivate.style.borderRadius = '50px';

        const imageSlider = document.querySelector('.image-slider');
        switch (targetId) {
            case 'slider-span1':
                imageSlider.style.left = '1280px';
                break;
            case 'slider-span2':
                imageSlider.style.left = '960px';
                break;
            case 'slider-span3':
                imageSlider.style.left = '640px';
                break;
            case 'slider-span4':
                imageSlider.style.left = '320px';
                break;
            case 'slider-span5':
                imageSlider.style.left = '0%';
                break;
            case 'slider-span6':
                imageSlider.style.left = '-320px';
                break;
            case 'slider-span7':
                imageSlider.style.left = '-640px';
                break;
            case 'slider-span8':
                imageSlider.style.left = '-960px';
                break;
            case 'slider-span9':
                imageSlider.style.left = '-1280px';
                break;
        }
    });
});



//eng - ita buttonß
const texts = {
    en: {
        welcome: "Welcome",
        portfolio: "Portfolio",
        contact: "Contact Me",
        helloIam: "Hello! I am a",
        hello: "Hello,",
        myNameIs: "My name is",
        bigTxt: "As a passionate graphic designer and product photographer since 2010, I have consistently delivered creative and dynamic projects that resonate with my clients’ brand essence and market demands. My versatile portfolio ranges from designs catering to baby products to visual strategies for real estate, from logos to billboards, showcasing my ability to tailor my craft to various industries. Known for my innovative approach, ability to thrive under pressure, and commitment to excellence, I am excited to present a glimpse of my capabilities through a small selection of my work.",
        graphicD: "Graphic Design",
        logoD: "Logo Design",
        photoTxt: "Photography",
        contentP: "Content Planning",
        phone: "Phone: +39 347 359 5718",
        adress: "Address: Cristo Re, Trento 38122 - Italy",
        submit: "Submit",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Enter your message"
    },
    it: {
        welcome: "Benvenuto",
        portfolio: "Portfolio",
        contact: "Contattami",
        helloIam: "Ciao! Sono una",
        hello: "Ciao,",
        myNameIs: "Mi chiamo",
        bigTxt: "Come grafica appassionata e fotografa di prodotti dal 2010, ho costantemente realizzato progetti creativi e dinamici che rispecchiano l’essenza del marchio dei miei clienti e le esigenze del mercato. Il mio portfolio versatile spazia da design per prodotti per bambini a strategie visive per il settore immobiliare, dai loghi ai cartelloni pubblicitari, dimostrando la mia capacità di adattare la mia arte a diversi settori. Riconosciuta per il mio approccio innovativo, la mia capacità di lavorare sotto pressione e il mio impegno verso l'eccellenza, sono lieta di presentare una piccola selezione del mio lavoro per darvi un'idea delle mie capacità.",
        graphicD: "Design Grafico",
        logoD: "Design di Loghi",
        photoTxt: "Fotografia",
        contentP: "Pianificazione dei Contenuti",
        phone: "Telefono: +39 347 359 5718",
        adress: "Indirizzo: Cristo Re, Trento 38122 - Italia",
        submit: "Invia",
        namePlaceholder: "Nome",
        emailPlaceholder: "Email",
        messagePlaceholder: "Inserisci il tuo messaggio"
    }
};

document.getElementById('switch').addEventListener('click', function () {
    this.classList.toggle('active');
    const isItalian = this.classList.contains('active');
    const selectedLang = isItalian ? 'it' : 'en';

    document.querySelector('a[href="#welcome"] li').textContent = texts[selectedLang].welcome;
    document.querySelector('a[href="#portfolio"] li').textContent = texts[selectedLang].portfolio;
    document.querySelector('a[href="#contact"] li').textContent = texts[selectedLang].contact;
    document.querySelector('.presentation h1').textContent = texts[selectedLang].helloIam;
    document.querySelector('.hello').textContent = texts[selectedLang].hello;
    document.querySelector('.myNameIs').textContent = texts[selectedLang].myNameIs;
    document.querySelector('.pText').textContent = texts[selectedLang].bigTxt;
    document.querySelector('.graphicDesign').textContent = texts[selectedLang].graphicD;
    document.querySelector('.logoDesign').textContent = texts[selectedLang].logoD;
    document.querySelector('.photoTxt').textContent = texts[selectedLang].photoTxt;
    document.querySelector('.contentPlanning').textContent = texts[selectedLang].contentP;
    document.querySelector('.contactPhone').textContent = texts[selectedLang].phone;
    document.querySelector('.contactAdress').textContent = texts[selectedLang].adress;
    document.querySelector('.submitBtn').textContent = texts[selectedLang].submit;
    document.querySelector('input[name="name"]').placeholder = texts[selectedLang].namePlaceholder;
    document.querySelector('input[name="email"]').placeholder = texts[selectedLang].emailPlaceholder;
    document.querySelector('textarea[name="message"]').placeholder = texts[selectedLang].messagePlaceholder;
});