/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str) {
  let strLength = str.length;
  if (strLength <= 20) {
    return str;
  } else {
    let strMax = str.slice(0,19);
    return strMax + '…';
  }
}

