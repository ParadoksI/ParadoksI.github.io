gsap.registerPlugin(ScrollTrigger);

var sections = gsap.utils.toArray(".panel");

gsap.to(".data__container", {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
        trigger: ".data__container",
        start: "top top",
        pin: true,
        scrub: 1.5,
        end: () => "+=" + document.querySelector(".data__container").offsetWidth
    }
});

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
    var customLabel = customName[0]; // Используем русские названия

    var numberSpan = document.createElement('div');
    numberSpan.classList.add('data__number'); // Добавляем класс с именем ключа
    if (i === 1) {
        numberSpan.classList.add('data__number__right');
        numberSpan.textContent = data[key] ;
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
    dataItem.classList.add('data__subitem');

    if (i === 3) {
        dataItem.classList.add('right');
    }

    var customName = customNames[key];
    var customLabel = customName[0]; // Используем русские названия

    var numberSpan = document.createElement('div');
    numberSpan.classList.add('data__number'); // Добавляем класс с именем ключа
    numberSpan.textContent = data[key] + " SOL"; // Устанавливаем значение числа

    dataItem.textContent = customLabel;
    dataItem.appendChild(numberSpan);

    section.appendChild(dataItem);
}