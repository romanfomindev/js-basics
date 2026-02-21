function validateCardByLuhn(cardNumber) {
    // Удаляем все нецифровые символы (дефисы, пробелы и т.д.)
    const digitsOnly = cardNumber.replace(/\D/g, '');

    // Проверяем, что остались только цифры и длина соответствует номеру карты
    if (!/^\d+$/.test(digitsOnly)) {
        return false;
    }

    let sum = 0;
    let isEven = false;

    // Проходим по цифрам справа налево
    for (let i = digitsOnly.length - 1; i >= 0; i--) {
        let digit = parseInt(digitsOnly[i], 10);

        // Удваиваем каждую вторую цифру (справа налево)
        if (isEven) {
            digit *= 2;
            // Если результат больше 9, вычитаем 9 (или складываем цифры)
            if (digit > 9) {
                digit = digit - 9; // или digit = 1 + (digit - 10)
            }
        }

        sum += digit;
        isEven = !isEven;
    }

    // Номер корректен, если сумма делится на 10 без остатка
    return sum % 10 === 0;
}
