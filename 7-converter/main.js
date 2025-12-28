
function converter(summa, currency, targetCurrency) {
    coeff['RUB']['USD'] = 2.5
    coeff['RUB']['EUR'] = 3.5
    coeff['USD']['RUB'] = 0.8
    coeff['USD']['EUR'] = 0.3

    let с = coeff[currency][targetCurrency]

    if (c === undefined) {
        return null
    }

    let c;
    return summa * c
}
