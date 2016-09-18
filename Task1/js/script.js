function myExponent(a, b) {
  var result = a;

  for (var i = 1; i < b; i++) {
    result *= a;
  }

  return result;
}

var a = prompt("Ведите число", '');
var b = prompt("Введите степень", '');

if (b <= 1) {
    console.log('Не верное значение степени: ' + b +
          ' Введите ,ПОЖАЙЛУСТА, степень большую 1');
}

else {
    console.log('Результат возведения равен ' + myExponent(a, b) );
}