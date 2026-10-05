// Мультиязычные тексты интерфейса
const uiTexts = {
    ru: {
        title: "Авторские туры по Грузии",
        subtitle: "Выберите направление, дату и забронируйте незабываемую поездку в WhatsApp",
        selectBtn: "Выбрать тур",
        price: "💰 Стоимость: <strong>от 350₾ / $130</strong> за тур",
        priceDesc: "Цена зависит от состава группы и маршрута. Обсудим детали и пожелания индивидуально!",
        dateLabel: "Выберите дату тура:",
        datePlaceholder: "Нажмите, чтобы выбрать дату...",
        waBtn: "Забронировать в WhatsApp 📱",
        alertDate: "Пожалуйста, выберите дату тура в календаре!",
        waMessage: "Здравствуйте! Хочу забронировать тур:\n📍 Направление: {dest}\n📅 Дата: {date}\nУточните, пожалуйста, детальные условия и стоимость."
    },
    en: {
        title: "Author's Tours in Georgia",
        subtitle: "Choose a destination, date, and book an unforgettable trip via WhatsApp",
        selectBtn: "Select Tour",
        price: "💰 Price: <strong>from 350₾ / $130</strong> per tour",
        priceDesc: "The price depends on group size and route. We will discuss details and preferences individually!",
        dateLabel: "Select tour date:",
        datePlaceholder: "Click to select a date...",
        waBtn: "Book via WhatsApp 📱",
        alertDate: "Please select a tour date in the calendar!",
        waMessage: "Hello! I want to book a tour:\n📍 Destination: {dest}\n📅 Date: {date}\nPlease clarify detailed terms and cost."
    },
    pl: {
        title: "Autorskie wycieczki po Gruzji",
        subtitle: "Wybierz kierunek, datę i zarezerwuj niezapomnianą podróż przez WhatsApp",
        selectBtn: "Wybierz wycieczkę",
        price: "💰 Cena: <strong>od 350₾ / $130</strong> za wycieczkę",
        priceDesc: "Cena zależy od wielkości grupy i trasy. Omawiamy szczegóły i preferencje indywidualnie!",
        dateLabel: "Wybierz datę wycieczki:",
        datePlaceholder: "Kliknij, aby wybrać datę...",
        waBtn: "Zarezerwuj przez WhatsApp 📱",
        alertDate: "Proszę wybrać datę wycieczki w kalendarzu!",
        waMessage: "Dzień dobry! Chcę zarezerwować wycieczkę:\n📍 Kierunek: {dest}\n📅 Data: {date}\nProszę o szczegółowe warunki i cenę."
    }
};

// База данных направлений на трех языках с фото из GitHub
const destinations = [
    {
        id: "tbilisi",
        names: { ru: "🏙️ Тбилиси", en: "🏙️ Tbilisi", pl: "🏙️ Tbilisi" },
        descs: {
            ru: "Серные бани, старый город, серпантины улиц и атмосфера вечного праздника.",
            en: "Sulfur baths, old town, winding streets and an atmosphere of eternal celebration.",
            pl: "Łaznie siarkowe, stare miasto, kręte uliczki i atmosfera wiecznego świętowania."
        },
        images: [
            "images/guide/tbilisi.jpg", "images/guide/tbilisi1.jpg", "images/guide/tbilisi01.jpg",
            "images/guide/tbilisi2.jpg", "images/guide/tbilisi02.jpg", "images/guide/tbilisi3.jpg",
            "images/guide/tbilisi4.jpg", "images/guide/tbilisi5.jpg", "images/guide/tbilisi6.jpg",
            "images/guide/tbilisi7.jpg", "images/guide/tbilisi8.jpg", "images/guide/tbilisi9.jpg"
        ]
    },
    {
        id: "mtskheta",
        names: { ru: "🏛️ Мцхета", en: "🏛️ Mtskheta", pl: "🏛️ Mccheta" },
        descs: {
            ru: "Древняя столица, слияние рек и виды с холма у храма Джвари.",
            en: "Ancient capital, river confluence, and views from the hill near Jvari monastery.",
            pl: "Starożytna stolica, ujście rzek i widoki ze wzgórza w pobliżu klasztoru Dżwari."
        },
        images: [
            "images/guide/Mtskheta01.jpg", "images/guide/Mtskheta02.jpg", "images/guide/Mtskheta03.jpg",
            "images/guide/Mtskheta04.jpg", "images/guide/Mtskheta05.jpg", "images/guide/Mtskheta06.jpg"
        ]
    },
    {
        id: "kutaisi",
        names: { ru: "🌿 Кутаиси", en: "🌿 Kutaisi", pl: "🌿 Kutaisi" },
        descs: {
            ru: "Колоритный южный город, каньоны и подземные пещеры Прометея.",
            en: "Colorful southern city, canyons, and underground Prometheus caves.",
            pl: "Kolorowe południowe miasto, kaniony i podziemne jaskinie Prometeusza."
        },
        images: [
            "images/guide/kutaisi01.jpg", "images/guide/kutaisi02.jpg", "images/guide/kutaisi03.jpg",
            "images/guide/kutaisi04.jpg", "images/guide/kutaisi06.jpg", "images/guide/kutaisi07.jpg",
            "images/guide/kutaisi08.jpg"
        ]
    },
    {
        id: "borjomi",
        names: { ru: "🌲 Боржоми", en: "🌲 Borjomi", pl: "🌲 Bordżomi" },
        descs: {
            ru: "Хвойный воздух, прохлада ущелья и та самая минералка из источника.",
            en: "Coniferous air, gorge coolness, and that famous mineral water from the spring.",
            pl: "Iglicowe powietrze, chłód wąwozu i ta słynna woda mineralna ze źródła."
        },
        images: [
            "images/guide/borjomi01.jpg", "images/guide/borjomi02.jpg", "images/guide/borjomi03.jpg",
            "images/guide/borjomi04.jpg", "images/guide/borjomi05.jpg", "images/guide/borjomi06.jpg"
        ]
    },
    {
        id: "batumi",
        names: { ru: "🌊 Батуми", en: "🌊 Batumi", pl: "🌊 Batumi" },
        descs: {
            ru: "Море, пальмы, вечерний бульвар и современная архитектура у воды.",
            en: "Sea, palms, evening boulevard, and modern architecture by the water.",
            pl: "Morze, palmy, wieczorny bulwar i nowoczesna architektura nad wodą."
        },
        images: [
            "images/guide/batumi01.jpg", "images/guide/batumi02.jpg", "images/guide/batumi03.jpg",
            "images/guide/batumi05.jpg", "images/guide/batumi06.jpg", "images/guide/batumi07.jpg",
            "images/guide/batumi08.jpg"
        ]
    },
    {
        id: "racha",
        names: { ru: "🏔️ Рача", en: "🏔️ Racha", pl: "🏔️ Racza" },
        descs: {
            ru: "Дикие горы, альпийские луга и родина легендарной Хванчкары.",
            en: "Wild mountains, alpine meadows, and the homeland of legendary Khvanchkara.",
            pl: "Dzikie góry, alpejskie łąki i ojczyzna legendarnego wina Chwanczkara."
        },
        images: [
            "images/guide/racha01.jpg", "images/guide/racha02.jpg", "images/guide/racha03.jpg",
            "images/guide/racha04.jpg", "images/guide/racha05.jpg"
        ]
    },
    {
        id: "gudauri",
        names: { ru: "⛷️ Гудаури", en: "⛷️ Gudauri", pl: "⛷️ Gudauri" },
        descs: {
            ru: "Грандиозные панорамы Кавказа и чистый горный адреналин.",
            en: "Grand Caucasian panoramas and pure mountain adrenaline.",
            pl: "Wspaniałe panoramy Kaukazu i czysta górska adrenalina."
        },
        images: [
            "images/guide/gudauri01.jpg", "images/guide/gudauri02.jpg", "images/guide/gudauri03.jpg",
            "images/guide/gudauri04.jpg", "images/guide/gudauri05.jpg", "images/guide/gudauri06.jpg",
            "images/guide/gudauri07.jpg", "images/guide/gudauri08.jpg", "images/guide/gudauri09.jpg"
        ]
    },
    {
        id: "vardzia",
        names: { ru: "🧗 Вардзия", en: "🧗 Vardzia", pl: "🧗 Wardzia" },
        descs: {
            ru: "Монументальный пещерный город-монастырь прямо в отвесной скале.",
            en: "Monumental cave monastery town right in a sheer cliff.",
            pl: "Monumentalne skalne miasto-klasztor wykute w stromej skale."
        },
        images: [
            "images/guide/vardzia01.jpg", "images/guide/vardzia02.jpg", "images/guide/vardzia03.jpg",
            "images/guide/vardzia04.jpg", "images/guide/vardzia05.jpg", "images/guide/vardzia06.jpg",
            "images/guide/vardzia07.jpg"
        ]
    },
    {
        id: "kakheti",
        names: { ru: "🍷 Кахетия", en: "🍷 Kakheti", pl: "🍷 Kachetia" },
        descs: {
            ru: "Бесконечные виноградники, Алазанская долина и город любви Сигнахи.",
            en: "Endless vineyards, Alazani Valley, and the city of love Signagi.",
            pl: "Niekończące się winnice, Dolina Alazani i miasto miłości Sighnaghi."
        },
        images: [
            "images/guide/kakhetia.jpg", "images/guide/kakhetia01.jpg", "images/guide/kakhetia02.jpg",
            "images/guide/kakhetia03.jpg", "images/guide/kakhetia04.jpg"
        ]
    }
];

let currentLang = 'ru';
let selectedDestinationId = null;
let selectedDate = '';

const grid = document.getElementById('destinationsGrid');
const modal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');

// Инициализация календаря Flatpickr
let calendar = flatpickr("#tourDate", {
    locale: "ru",
    minDate: "today",
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr) {
        selectedDate = dateStr;
    }
});

// Рендер интерфейса
function renderApp() {
    document.getElementById('headerTitle').innerText = uiTexts[currentLang].title;
    document.getElementById('headerSubtitle').innerText = uiTexts[currentLang].subtitle;
    document.getElementById('priceText').innerHTML = uiTexts[currentLang].price;
    document.getElementById('priceDesc').innerText = uiTexts[currentLang].priceDesc;
    document.getElementById('dateLabel').innerText = uiTexts[currentLang].dateLabel;
    document.getElementById('tourDate').placeholder = uiTexts[currentLang].datePlaceholder;
    document.getElementById('whatsappBtn').innerText = uiTexts[currentLang].waBtn;

    grid.innerHTML = '';
    destinations.forEach(item => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.images[0]}" alt="${item.names[currentLang]}" loading="lazy">
            </div>
            <div class="card-body">
                <h3>${item.names[currentLang]}</h3>
                <p>${item.descs[currentLang]}</p>
                <button class="select-btn">${uiTexts[currentLang].selectBtn}</button>
            </div>
        `;
        card.addEventListener('click', () => openModal(item));
        grid.appendChild(card);
    });

    if (selectedDestinationId) {
        const activeItem = destinations.find(d => d.id === selectedDestinationId);
        if (activeItem) {
            document.getElementById('modalTitle').innerText = activeItem.names[currentLang];
            document.getElementById('modalDesc').innerText = activeItem.descs[currentLang];
        }
    }
}

// Открытие модалки
function openModal(item) {
    selectedDestinationId = item.id;
    document.getElementById('modalTitle').innerText = item.names[currentLang];
    document.getElementById('modalDesc').innerText = item.descs[currentLang];
    
    const galleryContainer = document.getElementById('modalGallery');
    galleryContainer.innerHTML = '';
    item.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = item.names[currentLang];
        galleryContainer.appendChild(img);
    });

    modal.style.display = 'flex';
}

closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

// Переключение языков
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentLang = e.target.getAttribute('data-lang');
        
        let fpLocale = currentLang === 'pl' ? 'pl' : (currentLang === 'ru' ? 'ru' : 'default');
        calendar.set('locale', fpLocale);

        renderApp();
    });
});

// Отправка в WhatsApp
document.getElementById('whatsappBtn').addEventListener('click', () => {
    if (!selectedDate) {
        alert(uiTexts[currentLang].alertDate);
        return;
    }

    const activeItem = destinations.find(d => d.id === selectedDestinationId);
    const destName = activeItem ? activeItem.names[currentLang] : '';
    
    let msgTemplate = uiTexts[currentLang].waMessage;
    const text = msgTemplate.replace('{dest}', destName).replace('{date}', selectedDate);

    const phone = "995000000000"; // Замените на ваш реальный номер WhatsApp (без плюса)
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
});

// Запуск
renderApp();

