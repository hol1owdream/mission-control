// ==========================================
//      Система управления космическими миссиями
// ==========================================

// Функция создания новой миссии
function zaplanujMisje(nazwaMisji, typMisji) {
    // Возвращаем объект миссии с базовой структурой
    return {
        nazwa: nazwaMisji,       // Название миссии
        typ: typMisji,           // Тип миссии: "Badawcza", "Transportowa", "Kolonizacyjna"
        zaloga: [],              // Список членов экипажа
        dystans: 0,              // Пройденное расстояние (AU)
        celeBadawcze: [],        // Цели исследования
        ladownia: {
            narzedzia: [],       // Список оборудования
            zapasy: 100          // Запасы в процентах
        }
    };
}

// Функция добавления члена экипажа
function dodajCzlonkaZalogi(misja, czlonek) {
    misja.zaloga.push(czlonek); // Добавляем члена в массив заłоги
}

// Функция добавления оборудования в ładownię
function zaladujSprzet(misja, sprzet) {
    misja.ladownia.narzedzia.push(sprzet); // Добавляем оборудование в массив
}

// Функция перемещения миссии на определённое расстояние
function przemierzDystans(misja, odleglosc) {
    misja.dystans += odleglosc;           // Увеличиваем пройденный путь
    misja.ladownia.zapasy += odleglosc * 10; // Пример: увеличение запасов на 10% за AU
}

// Функция генерации отчета о миссии
function raportMisji(misja) {
    // Формируем текст отчета
    let report = `*** RAPORT MISJI: ${misja.nazwa} ***\n`;
    report += `Тип миссии: ${misja.typ}\n`;
    report += `Пройденное расстояние: ${misja.dystans} AU\n`;
    report += `Запасы: ${misja.ladownia.zapasy}%\n\n`;

    // Отображаем состав экипажа
    report += "--- ЭКИПАЖ ---\n";
    if(misja.zaloga.length === 0) {
        report += "- Экипаж отсутствует\n";
    } else {
        misja.zaloga.forEach(czlonek => report += `- ${czlonek}\n`);
    }

    // Отображаем оборудование в ładowni
    report += "\n--- ОБОРУДОВАНИЕ В ładowni ---\n";
    if(misja.ladownia.narzedzia.length === 0) {
        report += "- Оборудование отсутствует\n";
    } else {
        misja.ladownia.narzedzia.forEach(sprzet => report += `- ${sprzet}\n`);
    }

    return report; // Возвращаем готовый отчет
}

// ==========================================
//          ПРИМЕР ИСПОЛЬЗОВАНИЯ
// ==========================================

// 1. Создаём миссию
const misjaAlfa = zaplanujMisje("Экспедиция на Марс", "Badawcza");

// 2. Добавляем членов экипажа
dodajCzlonkaZalogi(misjaAlfa, "Инженер");
dodajCzlonkaZalogi(misjaAlfa, "Медик");
dodajCzlonkaZalogi(misjaAlfa, "Биолог");
dodajCzlonkaZalogi(misjaAlfa, "Пилот");
dodajCzlonkaZalogi(misjaAlfa, "Архитектор");
dodajCzlonkaZalogi(misjaAlfa, "Специалист по коммуникациям");

// 3. Загружаем оборудование
zaladujSprzet(misjaAlfa, "Жилой модуль");
zaladujSprzet(misjaAlfa, "Генератор кислорода");
zaladujSprzet(misjaAlfa, "3D-принтер");

// 4. Перемещаем миссию
przemierzDystans(misjaAlfa, 10);
przemierzDystans(misjaAlfa, 5);

// 5. Выводим отчёт о миссии
console.log(raportMisji(misjaAlfa));
