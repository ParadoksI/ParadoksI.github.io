// Получаем необходимые элементы
if (window.innerWidth > 1000) {
    const headerLogo = document.querySelector('.header__logo');
    const headerLogoMob = document.querySelector('.header__logo__mob');
    const headerRowNav = document.querySelector('.header__row__nav');
    const headerRowNavMob = document.querySelector('.header__row__nav__mob');

    const mobileMenuButton = document.querySelector('.header__nav__button');

    // Функция для добавления/удаления классов в зависимости от прокрутки
    function handleScroll() {
        if (window.scrollY > 0) {
            if (headerRowNav.classList.contains('opend')) {
                headerLogo.classList.add('v2');
                headerLogoMob.classList.add('v2');
            } else {
                headerLogo.classList.add('v2');
                headerLogoMob.classList.add('v2');
                headerRowNav.classList.add('v2');
                headerRowNavMob.classList.remove('v2');
            }


        } else {
            if (headerRowNav.classList.contains('opend')) {
                headerLogo.classList.remove('v2');
                headerLogoMob.classList.remove('v2');
            } else {
                headerLogo.classList.remove('v2');
                headerLogoMob.classList.remove('v2');
                headerRowNav.classList.remove('v2');
                headerRowNavMob.classList.add('v2');
            }


        }
    }

    function handleMobileMenuClick() {
        // Проверяем, есть ли у headerRowNav класс opend
        if (headerRowNav.classList.contains('opend')) {
            if (window.scrollY > 0) {

                headerRowNav.classList.remove('opend');
                headerRowNav.classList.add('v2');

            } else {
                headerRowNav.classList.remove('opend');
                headerRowNav.classList.remove('v2');
                headerRowNavMob.classList.add('v2');
            }
            // Если есть, убираем класс opend

        } else {
            // Если нет, убираем класс v2 и добавляем класс opend
            headerRowNav.classList.remove('v2');
            headerRowNav.classList.add('opend');
        }
    }

    // Обработчик события прокрутки страницы
    window.addEventListener('scroll', handleScroll);
    mobileMenuButton.addEventListener('click', handleMobileMenuClick);
} 




else {
    const headerLogo = document.querySelector('.header__logo');
    const headerLogoMob = document.querySelector('.header__logo__mob');
    const headerRowNav = document.querySelector('.header__row__nav');
    const headerRowNavMob = document.querySelector('.header__row__nav__mob');

    const mobileMenuButton = document.querySelector('.header__nav__button');

    headerLogo.classList.add('v2');
    headerLogoMob.classList.add('v2');
    headerRowNav.classList.add('v2');
    headerRowNavMob.classList.remove('v2');

    function handleMobileMenuClick() {
        // Проверяем, есть ли у headerRowNav класс opend
        if (headerRowNav.classList.contains('opend')) {
                headerRowNav.classList.remove('opend');
                headerRowNav.classList.add('v2');
                headerRowNavMob.classList.remove('v2');

        } else {
            // Если нет, убираем класс v2 и добавляем класс opend
            headerRowNav.classList.remove('v2');
            headerRowNav.classList.add('opend');
        }
    }

    mobileMenuButton.addEventListener('click', handleMobileMenuClick);
}
