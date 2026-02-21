function objectToQueryString(params) {

    // Получаем массив ключей и фильтруем значения null/undefined
    const validParams = Object.entries(params)
        .map(([key, value]) => {
            // Кодируем ключ и значение для безопасного использования в URL
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(String(value));
            return `${encodedKey}=${encodedValue}`;
        });

    // Если нет валидных параметров, возвращаем пустую строку
    if (validParams.length === 0) {
        return '';
    }

    // Объединяем параметры через & и добавляем ? в начале
    return validParams.join('&');
}

