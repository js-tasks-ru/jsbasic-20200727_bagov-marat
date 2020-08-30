/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let newEl;
  let newArr = [];
  users.forEach(function(el) {
    let newEl = el.name;
    newArr.push(newEl);
  });
  return newArr;

}