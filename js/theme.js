document.addEventListener('DOMContentLoaded', function () {
    var themeButton = document.querySelector('.nav__theme');
    var themeButtonImg = document.querySelector('.nav__theme img');

    var headerBack = document.querySelectorAll('.header__nav');
    var headerLine = document.querySelector('.header__nav__line');

    var headerReg = document.querySelector('.header__nav__reg__func');
    var headerRegImg = document.querySelector('.header__nav__reg__func img');

    var headerNav = document.querySelector('.header__row__nav');
    var headerMenu = document.querySelectorAll('.line');

    var headerLogoImg = document.querySelector('.header__logo__mob img');
    var linksImg = document.querySelector('.links__logo img');

    var dataLines = document.querySelectorAll('.data__number');

    var linksButtons = document.querySelectorAll('.links__button');

    themeButton.addEventListener('click', function () {
        // Получаем элемент body
        var body = document.body;

        body.classList.toggle('light-theme');
        headerLine.classList.toggle('light-theme');

        headerReg.classList.toggle('light-theme');
        headerNav.classList.toggle('light-theme');

        headerMenu.forEach(function (item) {
            item.classList.toggle('light-theme');
        });

        dataLines.forEach(function(item) { 
            item.classList.toggle('light-theme');
        });

        linksButtons.forEach(function(item) { 
            item.classList.toggle('light-theme');
        });

        if (body.classList.contains('light-theme')) { 
            headerLogoImg.src = '../img/logo_color_transparent.svg';
            linksImg.src = '../img/logo_color_transparent.svg';
        } else { 
            headerLogoImg.src = '../img/logo_color_transparent__dark.svg';
            linksImg.src = '../img/logo_color_transparent__dark.svg';
        }

        if (body.classList.contains('light-theme')) {
            headerRegImg.src = '../img/reg-ico-l.svg';
        } else {
            headerRegImg.src = '../img/reg-ico.svg';
        }

        headerBack.forEach(function (item) {
            item.classList.toggle('light-theme');
        });

        if (body.classList.contains('light-theme')) {
            themeButtonImg.src = '../img/brightness-high.svg';
        } else {
            themeButtonImg.src = '../img/moon.svg';
        }


    });
});