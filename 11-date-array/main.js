function filterAndFormatDates(arr) {
    // Функция для проверки, является ли год високосным
    function isLeapYear(year) {
        year = parseInt(year);
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Функция для проверки валидности даты
    function isValidDate(dateStr, format) {
        let day, month, year;

        // Разбираем строку в зависимости от формата
        if (format === 'dot') {
            const parts = dateStr.split('.');
            if (parts.length !== 3) return false;
            [day, month, year] = parts;
        } else if (format === 'slash') {
            const parts = dateStr.split('/');
            if (parts.length !== 3) return false;
            [month, day, year] = parts; // В формате MM/DD/YY
        } else {
            return false;
        }

        // Преобразуем в числа
        day = parseInt(day);
        month = parseInt(month);
        year = parseInt(year);

        // Добавляем префикс 20 для года, если он из двух цифр
        if (year < 100) {
            year += 2000;
        }

        // Базовые проверки
        if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
        if (month < 1 || month > 12) return false;
        if (day < 1) return false;

        // Проверка дней в месяце
        const daysInMonth = [
            31, // январь
            28 + (isLeapYear(year) ? 1 : 0), // февраль
            31, // март
            30, // апрель
            31, // май
            30, // июнь
            31, // июль
            31, // август
            30, // сентябрь
            31, // октябрь
            30, // ноябрь
            31  // декабрь
        ];

        if (day > daysInMonth[month - 1]) return false;

        return { day, month, year };
    }

    // Функция для форматирования даты
    function formatDate(dateObj) {
        const day = dateObj.day.toString().padStart(2, '0');
        const month = dateObj.month.toString().padStart(2, '0');
        const year = dateObj.year;
        return `${day}-${month}-${year}`;
    }

    // Основная логика
    const result = [];

    for (const dateStr of arr) {
        let dateObj = null;

        // Пробуем оба формата
        if (dateStr.includes('.')) {
            dateObj = isValidDate(dateStr, 'dot');
        } else if (dateStr.includes('/')) {
            dateObj = isValidDate(dateStr, 'slash');
        } else if (dateStr.includes('-')) {
            // Обработка формата DD-MM-YYYY
            const parts = dateStr.split('-');
            if (parts.length === 3) {
                const [day, month, year] = parts;
                const tempStr = `${day}.${month}.${year.slice(-2)}`;
                dateObj = isValidDate(tempStr, 'dot');
            }
        }

        // Если дата валидна, добавляем в результат
        if (dateObj) {
            result.push(formatDate(dateObj));
        }
    }

    return result;
}

// Тестирование функции
const testArray = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023',
    '29.02.2020', '29.02.2021', '31.04.2023', '12.05.23', '05/15/2023'];

console.log('Исходный массив:', testArray);
console.log('Результат:', filterAndFormatDates(testArray));

// Тест с вашим примером
const yourArray = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
console.log('\nВаш пример:');
console.log('Исходный массив:', yourArray);
console.log('Результат:', filterAndFormatDates(yourArray));