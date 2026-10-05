// Автоматическое отображение даты и погоды в Тбилиси
async function loadTbilisiInfo() {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date().toLocaleDateString('ru-RU', options);
    const dateEl = document.getElementById('current-date');
    if (dateEl) dateEl.textContent = `Тбилиси • ${today}`;

    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.7151&longitude=44.8271&current_weather=true');
        const data = await response.json();
        if (data && data.current_weather) {
            const temp = Math.round(data.current_weather.temperature);
            const weatherEl = document.getElementById('tbilisi-weather');
            if (weatherEl) weatherEl.textContent = `🌤️ ${temp}°C`;
        }
    } catch (e) {
        const weatherEl = document.getElementById('tbilisi-weather');
        if (weatherEl) weatherEl.textContent = '🌤️ Грузия';
    }
}
loadTbilisiInfo();

// Словарь перевода (RU, EN, PL)
const translations = {
    ru: {
        badge: "🏔️️ Туры и приключения под ключ",
        hero_title: "Откройте для себя настоящий активный отдых в горах Грузии",
        hero_desc: "Профессиональные инструкторы, местные гиды и незабываемые эмоции. Выбирайте направление ниже!",
        services_title: "Наши направления",
        services_subtitle: "Выберите интересующую вас услугу для подробной информации",
        ski_title: "Лыжи и сноуборд",
        ski_desc: "Обучение с нуля и улучшение техники катания в Гудаури. Индивидуальный подход для взрослых и детей.",
        guide_title: "Проводник и местный гид",
        guide_desc: "Безопасное сопровождение по лучшим маршрутам Грузии, треккинг и поездки по живописным локациям.",
        para_title: "Полеты на параплане",
        para_desc: "Незабываемые полеты в тандеме с пилотами. Увидите грандиозные ущелья с высоты птичьего полета.",
        btn_details: "Перейти к услуге",
        btn_soon: "Скоро открытие",
        whatsapp_btn: "Написать в WhatsApp",
        footer_rights: "Все права защищены."
    },
    en: {
        badge: "🏔️ Turnkey Tours & Adventures",
        hero_title: "Discover real active recreation in the mountains of Georgia",
        hero_desc: "Professional instructors, local guides, and unforgettable emotions. Choose your activity below!",
        services_title: "Our Services",
        services_subtitle: "Choose a service you are interested in for detailed information",
        ski_title: "Skiing & Snowboarding",
        ski_desc: "Lessons from scratch and riding technique improvement in Gudauri. Individual approach for adults and kids.",
        guide_title: "Local Guide & Escort",
        guide_desc: "Safe accompaniment along the best routes of Georgia, trekking, and trips to scenic locations.",
        para_title: "Paragliding",
        para_desc: "Unforgettable tandem flights with experienced pilots. See grand mountain gorges from a bird's eye view.",
        btn_details: "Go to service",
        btn_soon: "Coming soon",
        whatsapp_btn: "WhatsApp Chat",
        footer_rights: "All rights reserved."
    },
    pl: {
        badge: "🏔️ Wycieczki i przygody",
        hero_title: "Odkryj prawdziwy aktywny wypoczynek w górach Gruzji",
        hero_desc: "Profesjonalni instruktorzy, lokalni przewodnicy i niezapomniane emocje. Wybierz kierunek poniżej!",
        services_title: "Nasze usługi",
        services_subtitle: "Wybierz interesującą Cię usługę, aby uzyskać szczegółowe informacje",
        ski_title: "Narty i snowboard",
        ski_desc: "Nauka od podstaw i doskonalenie techniki jazdy w Gudauri. Indywidualne podejście dla dorosłych i dzieci.",
        guide_title: "Przewodnik i lokalny przewodnik",
        guide_desc: "Bezpieczna asysta na najlepszych szlakach Gruzji, trekking i wycieczki w malownicze miejsca.",
        para_title: "Loty paralotnią",
        para_desc: "Niezapomniane loty w tandemie z doświadczonymi pilotami. Zobacz wspaniałe wąwozy górskie z lotu ptaka.",
        btn_details: "Przejdź do usługi",
        btn_soon: "Wkrótce otwarte",
        whatsapp_btn: "Napisz na WhatsApp",
        footer_rights: "Wszelki prawa zastrzeżone."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    ['ru', 'en', 'pl'].forEach(l => {
        const btn = document.getElementById(`btn-${l}`);
        if (btn) {
            if (l === lang) {
                btn.className = "px-3 py-1 rounded-lg text-sm font-semibold bg-emerald-600 text-white transition-all";
            } else {
                btn.className = "px-3 py-1 rounded-lg text-sm font-semibold text-slate-400 hover:text-white transition-all";
            }
        }
    });
}
