let example = prompt('Введите операцию: +, -, *, /');
let num1 = +prompt('Введите первое число:');
let num2 = +prompt('Введите второе число:');
if (example === '+') {
   alert( `${num1}+${num2}=${num1+num2}`);
}
else if (example === '-') {
    alert(`${num1}-${num2}=${num1 - num2}`);
}
else if (example === '*') {
   alert( `${num1}*${num2}=${num1 * num2}`);
}
else if (example === '/') {
    alert(`${num1}/${num2}=${num1 / num2}`);
}
else {
    alert(`Возникла ошибка`);
}


