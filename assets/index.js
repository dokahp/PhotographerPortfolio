import i18Obj from './translate.js';


let menu = document.querySelector('.mobile-menu')
let hamburger = document.querySelector(".hamburger")
let menuItem = document.querySelectorAll(".navigation-mobile-item .navigation-link")
let portfolioBtn = document.querySelectorAll('.portfolio-btn')

// MENU
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("is-active")
    menu.classList.toggle('visible')
    menu.classList.toggle('is-active')
})

for (let el of menuItem) {
    el.addEventListener('click', () => {
        hamburger.classList.toggle("is-active")
        menu.classList.toggle('is-active')
    })
}
// END OF MENU

// Changing gallery images
const changeGallery = (event) => {
    document.querySelectorAll('.portfolio-btn').forEach(btn => btn.classList.remove('focus'))
    let portfolioImages = document.querySelectorAll('.portfolio-img')
    let season = event.target.dataset.i18
    portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio/${season}/${index + 1}.jpg`)
    portfolioImages.forEach(img => img.alt = `portfolio-${season}`)
    event.target.classList.add('focus')
}
portfolioBtn = portfolioBtn.forEach(el => el.addEventListener('click', changeGallery))
// End of changing gallery images
// Start i18n
let translationBtn = document.querySelector('.navigation-button')
const translate = (lang) => {
    let nodeList = document.querySelectorAll('[data-i18]')
    nodeList.forEach(el => {
            if (el.placeholder) {
                el.placeholder = i18Obj[`${lang}`][`${el.dataset.i18}`]
                el.textContent = ''
            } else {
                el.textContent = i18Obj[`${lang}`][`${el.dataset.i18}`]
            }
        })
}

const selectLangStyle = () => {
    document.querySelectorAll('.lang').forEach(el => el.classList.toggle('navigation-button-gold'))
}

const getTranslate = () => {
    if (localStorage.getItem('lang')) {
        let language = localStorage.getItem('lang')
        if (language == 'en') {
            localStorage.setItem('lang', 'ru')
            selectLangStyle()
            translate('ru')
        } else {
            localStorage.setItem('lang', 'en')
            selectLangStyle()
            translate('en')
        }
    } else {
        localStorage.setItem('lang', 'ru')
        translate('ru')
    }
}
translationBtn.addEventListener('click', getTranslate)
// end of i18n
// START OF THEME SWITCH
const getTheme = (theme) => {
    if (theme == 'light') {
        document.querySelector('.logo').style.backgroundImage = "url('./assets/img/logo-light.svg')"
        document.querySelector('.logo').classList.add('logo-light')
        document.querySelector('.theme').style.backgroundImage = "url('./assets/img/moon.svg')"
        document.querySelector('.theme').classList.add('theme-light')
        document.querySelectorAll('.link').forEach(link => link.classList.add('navigation-link-light'))
        document.documentElement.style.setProperty('--langColor', '#fff')
        document.querySelector('.hero').style.backgroundImage = "url('./assets/img/hero-light.jpg')"
        document.querySelector('.contacts').style.backgroundImage = "url('./assets/img/contacts-light.jpg')"
        document.documentElement.style.setProperty('--bg-Dark', '#fff');
        document.documentElement.style.setProperty('--white', '#1C1C1C');
        document.querySelectorAll('.section-heading').forEach(heading => heading.style.color = "#1C1C1C")
        document.querySelectorAll('.hr').forEach(hr => hr.style.borderBottom = '2px solid #1C1C1C')
        document.querySelector('.hero-wrapper > button').classList.add('white-light-btn')
        document.querySelector('.play-btn').style.backgroundImage = "url('./assets/img/play-light.svg')"
        document.querySelector('.play-btn').classList.add('play-light')
        document.querySelector('.contacts-wrapper > button').classList.add('white-light-btn')
        document.querySelectorAll('.form-input').forEach(input => input.classList.add('light-input'))
        document.querySelectorAll('.portfolio-btn').forEach(portfolioBtn => portfolioBtn.classList.add('portfolio-light-btn'))
        document.documentElement.style.setProperty('--portfolio-focus-color', 'var(--gold)');
        document.documentElement.style.setProperty('--porfolio-focus-background', '#1c1c1c');
        document.querySelectorAll('.price-block > button').forEach(priceBtn => priceBtn.classList.add('portfolio-light-btn'))
        // FOOTER ICONS
        document.querySelector('.instagram').style.backgroundImage = "url('./assets/img/inst-light.svg')"
        document.querySelector('.facebook').style.backgroundImage = "url('./assets/img/fb-light.svg')"
        document.querySelector('.twitter').style.backgroundImage = "url('./assets/img/tw-light.svg')"
        document.querySelector('.pinterest').style.backgroundImage = "url('./assets/img/pinterest-light.svg')"
        document.querySelectorAll('.icon').forEach(icon => icon.classList.add('light-icon'))
        // END
    } else {
        document.querySelector('.logo').style.backgroundImage = "url('./assets/img/logo-dark.svg')"
        document.querySelector('.logo').classList.remove('logo-light')
        document.querySelector('.theme').style.backgroundImage = "url('./assets/img/sun.svg')"
        document.querySelector('.theme').classList.remove('theme-light')
        document.querySelectorAll('.link').forEach(link => link.classList.remove('navigation-link-light'))
        document.documentElement.style.setProperty('--langColor', '#bdae82')
        document.querySelector('.hero').style.backgroundImage = "url('./assets/img/hero-dark.jpg')"
        document.querySelector('.contacts').style.backgroundImage = "url('./assets/img/contacts-dark.jpg')"
        document.documentElement.style.setProperty('--bg-Dark', '#000000');
        document.documentElement.style.setProperty('--white', '#ffffff');
        document.querySelectorAll('.section-heading').forEach(heading => heading.style.color = "var(--gold)")
        document.querySelectorAll('.hr').forEach(hr => hr.style.borderBottom = '2px solid var(--gold)')
        document.querySelector('.hero-wrapper > button').classList.remove('white-light-btn')
        document.querySelector('.play-btn').style.backgroundImage = "url('./assets/img/Play_Unvisited.svg')"
        document.querySelector('.play-btn').classList.remove('play-light')
        document.querySelector('.contacts-wrapper > button').classList.remove('white-light-btn')
        document.querySelectorAll('.form-input').forEach(input => input.classList.remove('light-input'))
        document.querySelectorAll('.portfolio-btn').forEach(portfolioBtn => portfolioBtn.classList.remove('portfolio-light-btn'))
        document.documentElement.style.setProperty('--portfolio-focus-color', '#000');
        document.documentElement.style.setProperty('--porfolio-focus-background', 'var(--gold)');
        document.querySelectorAll('.price-block > button').forEach(priceBtn => priceBtn.classList.remove('portfolio-light-btn'))
        // FOOTER ICONS
        document.querySelector('.instagram').style.backgroundImage = "url('./assets/img/inst-dark.svg')"
        document.querySelector('.facebook').style.backgroundImage = "url('./assets/img/fb-dark.svg')"
        document.querySelector('.twitter').style.backgroundImage = "url('./assets/img/tw-dark.svg')"
        document.querySelector('.pinterest').style.backgroundImage = "url('./assets/img/pinterest-dark.svg')"
        document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('light-icon'))
        // END
    }
}
const themeSwitch = () => {
    if(localStorage.getItem('theme')) {
        let currentTheme = localStorage.getItem('theme')
        if (currentTheme == 'dark') {
            localStorage.setItem('theme', 'light')
            getTheme('light')
        } else {
            localStorage.setItem('theme', 'dark')
            getTheme('dark')
        }
    } else {
        localStorage.setItem('theme', 'light')
        getTheme('light')
    }
}
let themeSwitchBtn = document.querySelector('.theme')
themeSwitchBtn.addEventListener('click', themeSwitch)
// END OF THEME SWITCH


function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      if (lang == 'ru') {selectLangStyle()}
      translate(lang);
    }
    if (localStorage.getItem('theme')) {
        getTheme(localStorage.getItem('theme'))
    }
  }
window.addEventListener('load', getLocalStorage)
console.log(`
Done 80 / 75
1.✅ Смена изображений в секции portfolio +25
2.✅ Перевод страницы на два языка +25
3.✅ Переключение светлой и тёмной темы +25
4.✅ Дополнительный функционал: выбранный пользователем язык отображения страницы
и светлая или тёмная тема сохраняются при перезагрузке страницы +5`)