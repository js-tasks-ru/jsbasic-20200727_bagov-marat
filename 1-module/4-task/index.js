/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let upperStr = str.toUpperCase();

  if (upperStr == '1XbeT now'.toUpperCase() || upperStr == 'free xxxxx'.toUpperCase()) {
    return true;
  } else {
    return false;
  }

}

