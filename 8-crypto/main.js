// Функция шифрования пароля
// Функция шифрования пароля - переворачивает строку
function crypto(password) {
    // 1. Разбиваем пароль на массив символов
    let chars = password.split('');

    // 2. Создаем новый массив для результата
    let result = [];

    // 3. Переворачиваем строку - добавляем символы с конца
    for (let i = chars.length - 1; i >= 0; i--) {
        result.push(chars[i]);
    }

    // 4. Склеиваем массив обратно в строку
    return result.join('');
}

// Функция проверки пароля
function check(encrypted, password) {
    // 1. Разбиваем зашифрованный пароль на символы
    let chars = encrypted.split('');

    // 2. Переворачиваем обратно
    let result = [];

    for (let i = chars.length - 1; i >= 0; i--) {
        result.push(chars[i]);
    }

    // 3. Склеиваем в строку
    let decrypted = result.join('');

    // 4. Сравниваем с переданным паролем
    return decrypted === password;
}