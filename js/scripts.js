document.addEventListener('DOMContentLoaded', function () {
    // var themeSlider = document.querySelector('input[name="theme"]');
    // var languageSlider = document.querySelector('input[name="language"]');
    // var headerToggle = document.querySelector('.header');

    // var themeImg = document.getElementById('theme-img');
    // var langImg = document.getElementById('lang-img');
    // var languageText = document.getElementById('language-text');


    // themeSlider.addEventListener('input', function () {
    //     if (this.value === '0') {
    //         // Применяем светлую тему
    //         document.body.classList.remove('dark-theme');

    //         headerToggle.classList.remove('dark-theme');
    //         langImg.src = '../img/translate.svg';
    //         themeImg.src = '../img/moon.svg';

    //     } else {
    //         // Применяем темную тему
    //         document.body.classList.add('dark-theme');
    //         headerToggle.classList.add('dark-theme');
    //         themeImg.src = '../img/brightness-high.svg';
    //         langImg.src = '../img/translate-light.svg';
    //     }
    // });

    var langGlob = 0;

    var languageTexts = {
        0: 'русский',
        1: ''
    };

    var localizedElements = {
        'btn1': {
            0: 'Регистрация',
            1: ''
            // Registration
        },
        'btn2': {
            0: 'Dashboard',
            1: ''
            // Dashboard
        },
        'btn3': {
            0: 'Мы в Telegram',
            1: ''
            // Telegram
        },
        'btn4': {
            0: 'Gitbook',
            1: ''
            // Gitbook
        },
        'btn5': {
            0: 'Мы в Discord',
            1: ''
            // Discord
        }
    };

    function updateLocalizedElements(language) {
        for (var id in localizedElements) {
            var element = document.getElementById(id);
            if (element) {
                var text = localizedElements[id][language];
                if (text) {
                    element.textContent = text;
                }
            }
        }
    }

    // Отображение данных

    // var data = {
    //     'connect_stake': 3073412,
    //     'last_epoch': 574,
    //     'last_payout_epech': 40,
    //     'total_payout': 50
    // };

    // var customNames = {
    //     'connect_stake': { 0: 'Общий обьем стейкс в монетах', 1: 'Total volume of steaks in coins' },
    //     'last_epoch': { 0: 'Текущий номер Epoch', 1: "Epoch's current number" },
    //     'last_payout_epech': { 0: 'Размер прошлой выплаты', 1: 'Amount of past payment' },
    //     'total_payout': { 0: 'Всего выплачено', 1: 'Total paid' }
    // };

    // var dataGrid = document.querySelector('.data');
    // var count = 0; // переменная для отслеживания количества элементов
    // var currentSection; // переменная для хранения текущей секции




    
    





    // for (var key in data) {
    //     if (data.hasOwnProperty(key)) {
    //         var dataItem = document.createElement('section');
    //         dataItem.classList.add('data__item', 'panel');

    //         var customName = customNames[key];
    //         var customLabel = customName[langGlob];

    //         // Создаем элемент span для числа и добавляем ему класс
    //         var numberSpan = document.createElement('div');
    //         numberSpan.classList.add('data__number'); // Добавляем класс с именем ключа
    //         numberSpan.textContent = data[key] + " SOL"; // Устанавливаем значение числа

    //         // Добавляем кастомное название и span с числом внутрь элемента .data__item
    //         dataItem.textContent = customLabel;
    //         dataItem.appendChild(numberSpan);

    //         dataGrid.appendChild(dataItem);
    //     }
    // }

    // languageSlider.addEventListener('input', function () {
    //     var lang = parseInt(this.value);

    //     langGlob = lang;
    //     var text = languageTexts[lang];
    //     if (text) {
    //         languageText.textContent = text;
    //     }
    //     updateLocalizedElements(lang)
    //     // Удаляем старые элементы с данными
    //     while (dataGrid.firstChild) {
    //         dataGrid.removeChild(dataGrid.firstChild);
    //     }
    //     // Создаем новые элементы с данными для выбранного языка
    //     for (var key in data) {
    //         if (data.hasOwnProperty(key)) {
    //             var dataItem = document.createElement('div');
    //             dataItem.classList.add('data__item');

    //             var customName = customNames[key];
    //             var customLabel = customName[langGlob] + ': ';

    //             // Создаем элемент span для числа и добавляем ему класс
    //             var numberSpan = document.createElement('span');
    //             numberSpan.classList.add('data__number');
    //             numberSpan.textContent = data[key]; // Устанавливаем значение числа

    //             // Добавляем кастомное название и span с числом внутрь элемента .data__item
    //             dataItem.textContent = customLabel;
    //             dataItem.appendChild(numberSpan);

    //             dataGrid.appendChild(dataItem);
    //         }
    //     }

    //     gsap.defaults({ ease: "none" });

    //     const buttons = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5"];
    //     const buttonText = ["Registration", "Dashboard", "Telegram", "Gitbook", "Discord"];

    //     buttons.forEach((button, index) => {
    //         gsap.to(button, {
    //             duration: 1,
    //             opacity: 1, // Начальная прозрачность
    //             text: buttonText[index], // Устанавливаем текст кнопки
    //             onComplete: () => { // Когда анимация завершена
    //                 if (index < buttons.length - 1) {
    //                     gsap.set(buttons[index + 1], { opacity: 1 }); // Показываем следующую кнопку
    //                 }
    //             }
    //         });
    //     });

    //     // Анимация для текста на языковой кнопке
    //     gsap.to("#language-text", {
    //         duration: 1,
    //         text: "English"
    //     });

    //     alert('Изменение языка на ' + (lang === 0 ? 'русский' : 'английский'));
    // });



});
