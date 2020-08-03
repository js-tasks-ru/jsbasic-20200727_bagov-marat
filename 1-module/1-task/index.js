/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1

  for (let i = 1; i <= n; i++) {
    result*=i;
  }
  return result;
}

const check = factorial(5);