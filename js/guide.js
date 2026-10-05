document.addEventListener('DOMContentLoaded', () => {
    // Инициализация календаря Flatpickr для выбора даты поездки
    if (typeof flatpickr !== 'undefined') {
        flatpickr("#tour-date", {
            locale: "ru",
            minDate: "today",
            dateFormat: "d.m.Y"
        });
    }

    // Логика модального окна для туров
    const modal = document.getElementById('tour-modal');
    const closeModal = document.getElementById('close-modal');
    const selectButtons = document.querySelectorAll('.select-btn');

    if (modal && closeModal) {
        selectButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Если кнопка — это ссылка на WhatsApp, даем ей отработать, 
                // но если открываем модалку бронирования:
                if (btn.getAttribute('href')) return;
                
                e.preventDefault();
                modal.style.display = 'flex';
            });

            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Переключение языков (активный класс)
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});

