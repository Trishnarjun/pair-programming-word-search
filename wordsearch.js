const wordSearch = (letters, word) => {
  let arr = [];
  let tempArr = [];
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let j = 0; j < horizontalJoin.length; j++) {
    for (let k = 0; k < horizontalJoin.length; k++) {
      if  (tempArr.length === horizontalJoin.length) {
        arr.push(tempArr);
        tempArr = [];
      }
      tempArr.push(letters[k][j]);
    }
  }
  const VerticalJoin = arr.map(ls => ls.join(''));
  for (let i = 0; i < horizontalJoin.length; i++) {
    if (horizontalJoin[i].includes(word)) {
      return true;
    }
  }
  for (let i = 0; i < VerticalJoin.length; i++) {
    if (VerticalJoin[i].includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;