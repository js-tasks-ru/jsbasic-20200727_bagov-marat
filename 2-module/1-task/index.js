/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (let prop in salaries) {
    let typeProp = typeof(salaries[prop]);
    if (typeProp == 'number') {
      sum += salaries[prop];

    } else {
      sum == 0;
    }

  }
  return sum;
}