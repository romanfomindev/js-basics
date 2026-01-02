function sortArray(arr) {
    // Создаем копию массива, чтобы не изменять оригинал
    let sortedArr = [...arr];

    // Внешний цикл - проходит по всем элементам
    for (let i = 0; i < sortedArr.length - 1; i++) {

        // Внутренний цикл - сравнивает соседние элементы
        for (let j = 0; j < sortedArr.length - 1 - i; j++) {

            // Сравниваем текущий элемент со следующим
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Если текущий больше следующего, меняем их местами
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }

    return sortedArr;
}