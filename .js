// ==========================================
//      Система управления космическими миссиями
// ==========================================

// Функция создания новой миссии
function zaplanujMisje(nazwaMisji, typMisji) {
    // Возвращаем объект миссии с базовой структурой
    return {
        nazwa: nazwaMisji,       // Название миссии
        typ: typMisji,           // Тип миссии
        zaloga: [],              // Список членов экипажа
        dystans: 0,              // Пройденное расстояние в AU
        celeBadawcze: [],        // Цели исследования
        ladownia: {
            narzedzia: [],       // Список оборудования
            zapasy: 100          // Запасы в процентах
        }
    };
}

// Функция добавления члена экипажа
function dodajCzlonkaZalogi(misja, czlonek) {
    misja.zaloga.push(czlonek); // Добавляем нового члена в экипаж
}

// Функция загрузки оборудования
function zaladujSprzet(misja, sprzet) {
    misja.ladownia.narzedzia.push(sprzet); // Добавляем оборудование в грузовой отсек
}

// Функция обновления пройденного расстояния
function przemierzDystans(misja, odleglosc) {
    misja.dystans += odleglosc;           // Увеличиваем общий путь
    misja.ladownia.zapasy += odleglosc * 10; // Изменяем запасы (примерная логика)
}

// Функция генерации отчёта
function raportMisji(misja) {
    // Формируем текстовый отчёт
    let raport = `*** RAPORT MISJI: ${misja.nazwa} ***\n`;
    raport += `Typ misji: ${misja.typ}\n`;
    raport += `Przebyty dystans: ${misja.dystans} AU\n`;
    raport += `Pozostałe zapasy: ${misja.ladownia.zapasy}%\n\n`;

    // Секция экипажа
    raport += "--- ZAŁOGA ---\n";
    if (misja.zaloga.length === 0) {
        raport += "- Brak członków załogi\n"; // Нет экипажа
    } else {
        misja.zaloga.forEach(osoba => raport += `- ${osoba}\n`);
    }

    // Секция оборудования
    raport += "\n--- SPRZĘT W ŁADOWNI ---\n";
    if (misja.ladownia.narzedzia.length === 0) {
        raport += "- Brak sprzętu\n"; // Нет оборудования
    } else {
        misja.ladownia.narzedzia.forEach(sprzet => raport += `- ${sprzet}\n`);
    }

    return raport; // Возвращаем полностью сформированный отчёт
}

// ==========================================
//             ПРИМЕР ИСПОЛЬЗОВАНИЯ
// ==========================================

// Создаём новую миссию
const misjaAlfa = zaplanujMisje("Ekspedycja na Marsa", "Badawcza");

// Добавляем членов экипажа
dodajCzlonkaZalogi(misjaAlfa, "Inżynier");
dodajCzlonkaZalogi(misjaAlfa, "Medyk");
dodajCzlonkaZalogi(misjaAlfa, "Biolog");
dodajCzlonkaZalogi(misjaAlfa, "Pilot");
dodajCzlonkaZalogi(misjaAlfa, "Architekt");
dodajCzlonkaZalogi(misjaAlfa, "Specjalista ds. komunikacji");

// Загружаем оборудование
zaladujSprzet(misjaAlfa, "Moduł mieszkalny");
zaladujSprzet(misjaAlfa, "Generator tlenu");
zaladujSprzet(misjaAlfa, "Drukarka 3D");

// Продвигаем миссию вперёд
przemierzDystans(misjaAlfa, 10);
przemierzDystans(misjaAlfa, 5);

// Выводим финальный отчёт
console.log(raportMisji(misjaAlfa));
