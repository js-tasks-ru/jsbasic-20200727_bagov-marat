/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    if (str !== '') {
      let upperLetter = str[0].toUpperCase();
      let lastLetters = str.slice(1);
  
      return upperLetter + lastLetters;
    } else {
      return ''
    }
  
  }
