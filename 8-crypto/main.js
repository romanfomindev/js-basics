// Функция шифрования пароля
function crypto(password) {
    // 1. Разбиваем пароль на массив символов
    let chars = password.split('');

    // 2. Меняем местами символы попарно (1-й со 2-м, 3-й с 4-м и т.д.)
    for (let i = 0; i < chars.length - 1; i += 2) {
        // Временная переменная для обмена
        let temp = chars[i];
        chars[i] = chars[i + 1];
        chars[i + 1] = temp;
    }

    // 3. Склеиваем массив обратно в строку
    return chars.join('');
}

// Функция проверки пароля
function check(encrypted, password) {
    // 1. Разбиваем зашифрованный пароль на символы
    let chars = encrypted.split('');

    // 2. Воспроизводим алгоритм назад (меняем местами обратно)
    for (let i = 0; i < chars.length - 1; i += 2) {
        // Временная переменная для обмена
        let temp = chars[i];
        chars[i] = chars[i + 1];
        chars[i + 1] = temp;
    }

    // 3. Склеиваем в строку
    let decrypted = chars.join('');

    // 4. Сравниваем с переданным паролем
    return decrypted === password;
}