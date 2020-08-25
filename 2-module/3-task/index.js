let calculator = {
  
};


calculator.read = function (a,b) {
    this.a = a;
    this.b = b;
  }
  
  calculator.sum = function (a,b) {
    return this.a + this.b;
  }
  
  calculator.mul = function (a,b) {
    return this.a * this.b;
  }
  
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
