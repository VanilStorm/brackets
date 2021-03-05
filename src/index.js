module.exports = function check(str, bracketsConfig) {
 let tmp = 0;
  for (let c of str) {
    if (c === '(') tmp++;
    else if (c === ')' && --tmp < 0) return false;
    else if (c === '{') tmp++;
    else if (c === '}' && --tmp < 0) return false;
    else if (c === '[') tmp++;
    else if (c === ']' && --tmp < 0) return false;
  }

  return tmp === 0; 
}
