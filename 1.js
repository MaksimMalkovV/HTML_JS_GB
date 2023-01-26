
const Tem = +prompt("Введите температуру в Цельсиях для перевода в Фаренгейт");

function convert(value) {
    return ((9 / 5) * value + 32);
}

alert(`Ваша температура в цельсиях: ${Tem.toFixed(1)}, полученное значение в Фаренгейтах: ${convert(Tem).toFixed(1)}`)