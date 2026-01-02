
function converter(summa, currency, targetCurrency) {
    let coeff = {
        RUB: {
            USD: 2.5,
            EUR: 3.5
        },
        USD: {
            RUB: 0.8,
            EUR: 0.3
        },
        EUR: {} // можно оставить пустым или заполнить позже
    };

    let c = coeff[currency][targetCurrency]

    if (c === undefined) {
        return null
    }

    return summa * c
}
