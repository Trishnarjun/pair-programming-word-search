const wordSearch = (letters, word) => {
  let arr = [];
  let tempArr = [];
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let j = 0; j < horizontalJoin.length; j++) {
    for (let k = 0; k < horizontalJoin.length; k++) {
      console.log(tempArr.length,letters[k][j],horizontalJoin.length)
      if  (tempArr.length === horizontalJoin.length) {
        arr.push(tempArr);
        tempArr = [];
      }
    
      tempArr.push(letters[k][j]);
    }
  }
  const VerticalJoin = arr.map(ls => ls.join(''));
  for (let i = 0; i < horizontalJoin.length; i++) {
    console.log(VerticalJoin[i]);
    if (horizontalJoin[i].includes(word)) {
      return true;
    }
  }
  for (let i = 0; i < VerticalJoin.length; i++) {
    console.log(VerticalJoin[i]);
    if (VerticalJoin[i].includes(word)) {
      return true;
    }
  }
  return false;
};
// horizontal join
// vertical join
// check
/*const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (let ele of horizontalJoin) {
    if (ele.includes(word)) {
      return true;
    };
  }
return false;
}*/


const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD');


module.exports = wordSearch;