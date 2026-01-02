function filterArray(numbers, shouldRemove) {
    // Создаем пустой массив для результата
    let result = [];

    // Проходим по всем числам в массиве
    for (let i = 0; i < numbers.length; i++) {
        // Если функция удаления возвращает false (не нужно удалять)
        // то добавляем число в результат
        if (!shouldRemove(numbers[i])) {
            result.push(numbers[i]);
        }
    }

    return result;
}