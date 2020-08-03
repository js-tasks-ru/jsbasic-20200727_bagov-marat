/**
 * Эту функцию трогать не нужно
 */
let userName = prompt('Введите ваше имя');
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  let objName = userName.split('');
  let spaceInName = objName.find(function(el) {
    return el == ' ';
  });
  let nameLength = objName.length;

  if (nameLength >=4 && spaceInName == undefined) {
    return true;
  } else {
    return false;
  }
}

/**
 * Эту функцию трогать не нужно
 */
function sayHello() {


  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
