var langBtn = document.getElementById('lang-btn');
var lang = 1;

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

var sections = gsap.utils.toArray(".panel");

gsap.to(".data__container", {
    xPercent: -90,
    ease: "none",
    scrollTrigger: {
        trigger: ".data__container",
        start: "top top",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".data__container").offsetWidth
    }
});

var englishText = {
    title: "Powerful for developers <br> Fast for everyone",
    leftDisc: "Bring blockchain to the people. Solana supports experiences",
    rightDisc: "for power users, new consumers, and everyone in between.",
    titleStat: "Our statistics",
    titleLast: "Begin right now!",
    btn1 : "Regisration",
    btn2 : "Dashboard",
    btn3 : "Telegram",
    btn4 : "Discord",
    btn5 : "Gitbook"
};

var russianText = {
    title: "Мощный для разработчиков <br> Быстрый для всех",
    leftDisc: "Доставляйте блокчейн людям. Solana поддерживает опыт",
    rightDisc: "для опытных пользователей, новых потребителей и всех, кто между ними.",
    titleStat: "Немного статистики",
    titleLast: "Начните прямо сейчас!",
    btn1 : "Регистрация",
    btn2 : "Наш Dashboard",
    btn3 : "Telegram-канал",
    btn4 : "Наш Discord",
    btn5 : "Gitbook"
};

// Получение элементов заголовка и описания
var titleText = document.querySelector('.title__text.all_title');
var leftDisc = document.querySelector('.title__disc__left');
var rightDisc = document.querySelector('.title__disc__right');
var titleStat = document.querySelector('.data__title p');
var titleLast = document.querySelector('.links__title');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');

titleText.innerHTML = englishText.title;
leftDisc.innerHTML = englishText.leftDisc;
rightDisc.innerHTML = englishText.rightDisc;
titleStat.innerHTML = englishText.titleStat;
titleLast.innerHtml = englishText.titleLast;
btn1.innerHTML = englishText.btn1;
btn2.innerHTML = englishText.btn2;
btn3.innerHTML = englishText.btn3;
btn4.innerHTML = englishText.btn4;
btn5.innerHTML = englishText.btn5;

var data = {
    'connect_stake': 3073412,
    'last_epoch': 574,
    'last_payout_epech': 40,
    'total_payout': 50
};

var customNames = {
    'connect_stake': { 0: 'Общий обьем стейкс в монетах', 1: 'Total volume of steaks in coins' },
    'last_epoch': { 0: 'Текущий номер Epoch', 1: "Epoch's current number" },
    'last_payout_epech': { 0: 'Размер прошлой выплаты', 1: 'Amount of past payment' },
    'total_payout': { 0: 'Всего выплачено', 1: 'Total paid' }
};

var dataGrid = document.querySelector('.data__container');
var dataTitle = document.querySelector('.data__title');

var count = 0;

for (var i = 0; i < 2; i++) {
    var key = Object.keys(data)[i];
    var dataItem = document.createElement('div');
    dataItem.classList.add('data__subitem');

    if (i === 1) {
        dataItem.classList.add('right');
    }

    var customName = customNames[key];
    var customLabel = customName[lang]; // Используем русские названия

    var numberSpan = document.createElement('div');
    numberSpan.classList.add('data__number'); // Добавляем класс с именем ключа
    if (i === 1) {
        numberSpan.classList.add('data__number__right');
        numberSpan.textContent = data[key];
    }
    else {
        numberSpan.textContent = data[key] + " SOL";
    }
    // Устанавливаем значение числа

    dataItem.textContent = customLabel;
    dataItem.appendChild(numberSpan);

    dataTitle.appendChild(dataItem);


}

// Создаем секцию для остальных элементов
var section = document.createElement('section');
section.classList.add('data__item', 'panel');
dataGrid.appendChild(section);

// Добавляем оставшиеся элементы в эту секцию
for (var i = 2; i < Object.keys(data).length; i++) {
    var key = Object.keys(data)[i];
    var dataItem = document.createElement('div');
    dataItem.classList.add('data__subitem', 'sec__section');

    if (i === 3) {
        dataItem.classList.add('right', 'sec_section__right');
    }

    var customName = customNames[key];
    var customLabel = customName[lang]; // Используем русские названия

    var numberSpan = document.createElement('div');

    numberSpan.classList.add('data__number'); // Добавляем класс с именем ключа
    if (i === 3) {
        numberSpan.classList.add('data__number__right');
    }
    numberSpan.textContent = data[key] + " SOL"; // Устанавливаем значение числа

    dataItem.textContent = customLabel;
    dataItem.appendChild(numberSpan);

    section.appendChild(dataItem);
}

// Функция для запуска анимации чисел, когда они видимы на экране
function animateNumbersWhenVisible() {
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Задаем порог для срабатывания обнаружения в половину видимости
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            // Если элемент находится в области видимости
            if (entry.isIntersecting) {
                var targetNumber = parseFloat(entry.target.textContent.replace(' SOL', '')); // Получаем конечное число
                
                // Создаем объект-обертку для числа
                var numberObject = { value: 0 };
                
                // Запускаем анимацию числа
                gsap.to(numberObject, {
                    duration: 2, 
                    value: targetNumber, 
                    onUpdate: function() {
                        // Обновляем текст элемента при каждом обновлении анимации
                        if (entry.target.classList.contains('data__number__right')) {
                            entry.target.textContent = "SOL " + Math.round(numberObject.value);
                        } else {
                            entry.target.textContent = Math.round(numberObject.value) + " SOL";
                        }
                    },
                    ease: "power1.inOut"
                });

                // Отключаем наблюдение, чтобы анимация не запускалась снова
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Наблюдаем за каждым элементом с классом 'data__number'
    document.querySelectorAll('.data__number').forEach(function(element) {
        observer.observe(element);
    });
}
// Запускаем функцию при загрузке страницы
window.addEventListener('load', animateNumbersWhenVisible);

// Анимация появления сверху вниз
gsap.utils.toArray(".data__title").forEach(panel => {
    gsap.from(panel, {
        y: "-=50", // Начните с немного выше, чем исходное положение
        opacity: 0, // Начните с прозрачности 0
        duration: 1, // Длительность анимации 1 секунда
        scrollTrigger: {
            trigger: panel,
            start: "top 50%", // Начать анимацию, когда элемент появляется в 80% видимости
            end: "bottom 20%", // Закончить анимацию, когда элемент останется в 20% видимости
            toggleActions: "play none none reverse", // Воспроизвести анимацию при прокрутке вниз и обратно
        }
    });
});

// =====================COINS
const coins = gsap.utils.toArray(".data__subitem__custom img")

gsap.utils.toArray(".data__subitem__custom img").forEach(img => {
    gsap.from(img, {
        y: "-=50", // Начните с немного выше, чем исходное положение
        opacity: 0, // Начните с прозрачности 0
        duration: 1, // Длительность анимации 1 секунда
        scrollTrigger: {
            trigger: img,
            start: "top 50%", // Начать анимацию, когда элемент появляется в 80% видимости
            end: "bottom 20%", // Закончить анимацию, когда элемент останется в 20% видимости
            toggleActions: "play none none reverse", // Воспроизвести анимацию при прокрутке вниз и обратно
        }
    });
});

coins.forEach((coin, i) => {
    gsap.from(coin, { 
        xPercent: coin.dataset.distance,
        scrollTrigger : {
            scrub: 0.3
        }
    })
})

gsap.utils.toArray('.links__button a').forEach(function (link, index) {
    gsap.from(link, {
        opacity: 0.3,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
            trigger: link,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

langBtn.addEventListener('click', function () {
    // Локализация
    if (titleText.innerHTML === englishText.title) {
        gsap.to(".title__text", {
            duration: 1,
            text: russianText.title,
            ease: "none",
        });
        gsap.to(leftDisc, {
            duration: 1,
            text: russianText.leftDisc,
            ease: "none",
        });
        gsap.to(rightDisc, {
            duration: 1,
            text: russianText.rightDisc,
            ease: "none",
        });
        gsap.to(titleStat, {
            duration: 1,
            text: russianText.titleStat,
            ease: "none",
        });
        gsap.to(titleLast, {
            duration: 1,
            text: russianText.titleLast,
            ease: "none",
        });
        gsap.to(btn1, {
            duration: 1,
            text: russianText.btn1,
            ease: "none",
        });
        gsap.to(btn2, {
            duration: 1,
            text: russianText.btn2,
            ease: "none",
        });
        gsap.to(btn3, {
            duration: 1,
            text: russianText.btn3,
            ease: "none",
        });
        gsap.to(btn4, {
            duration: 1,
            text: russianText.btn4,
            ease: "none",
        });
        gsap.to(btn5, {
            duration: 1,
            text: russianText.btn5,
            ease: "none",
        });
        
    } else {
        gsap.to(".title__text", {
            duration: 1,
            text: englishText.title,
            ease: "none",
        });
        gsap.to(leftDisc, {
            duration: 1,
            text: englishText.leftDisc,
            ease: "none",
        });
        gsap.to(rightDisc, {
            duration: 1,
            text: englishText.rightDisc,
            ease: "none",
        });
        gsap.to(titleStat, {
            duration: 1,
            text: englishText.titleStat,
            ease: "none",
        });
        gsap.to(titleLast, {
            duration: 1,
            text: englishText.titleLast,
            ease: "none",
        });
        gsap.to(btn1, {
            duration: 1,
            text: englishText.btn1,
            ease: "none",
        });
        gsap.to(btn2, {
            duration: 1,
            text: englishText.btn2,
            ease: "none",
        });
        gsap.to(btn3, {
            duration: 1,
            text: englishText.btn3,
            ease: "none",
        });
        gsap.to(btn4, {
            duration: 1,
            text: englishText.btn4,
            ease: "none",
        });
        gsap.to(btn5, {
            duration: 1,
            text: englishText.btn5,
            ease: "none",
        });
    }



    var existingDataItems = document.querySelectorAll('.data__subitem');

    existingDataItems.forEach(function (item) {
        item.parentNode.removeChild(item);
    });

    if (lang === 1) {
        langBtn.textContent = "Русский";
        lang = 0;
    } else if (lang === 0) {
        langBtn.textContent = 'English';
        lang = 1;
    }

    for (var i = 0; i < 2; i++) {
        var key = Object.keys(data)[i];
        var dataItem = document.createElement('div');
        dataItem.classList.add('data__subitem');

        if (i === 1) {
            dataItem.classList.add('right');
        }

        var customName = customNames[key];
        var customLabel = customName[lang]; // Используем русские названия

        var numberSpan = document.createElement('div');
        numberSpan.classList.add('data__number'); // Добавляем класс с именем ключа
        if (i === 1) {
            numberSpan.classList.add('data__number__right');
            numberSpan.textContent = data[key];
        }
        else {
            numberSpan.textContent = data[key] + " SOL";
        }
        // Устанавливаем значение числа

        dataItem.textContent = customLabel;
        dataItem.appendChild(numberSpan);

        dataTitle.appendChild(dataItem);
    }

    // Создаем секцию для остальных элементов
    var section = document.createElement('section');
    section.classList.add('data__item', 'panel');
    dataGrid.appendChild(section);

    // Добавляем оставшиеся элементы в эту секцию
    for (var i = 2; i < Object.keys(data).length; i++) {
        var key = Object.keys(data)[i];
        var dataItem = document.createElement('div');
        dataItem.classList.add('data__subitem', 'sec__section');

        if (i === 3) {
            dataItem.classList.add('right', 'sec_section__right');
        }

        var customName = customNames[key];
        var customLabel = customName[lang]; // Используем русские названия

        var numberSpan = document.createElement('div');

        numberSpan.classList.add('data__number'); // Добавляем класс с именем ключа
        if (i === 3) {
            numberSpan.classList.add('data__number__right');
        }
        numberSpan.textContent = data[key] + " SOL"; // Устанавливаем значение числа

        dataItem.textContent = customLabel;
        dataItem.appendChild(numberSpan);

        section.appendChild(dataItem);
    }
});

