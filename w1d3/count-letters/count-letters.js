function countLetters(inStr) {

  var count = {};
  var str = inStr.replace(/\s/g,'');
  var arrayStr = str.split("");

  for (var i = 0; i < arrayStr.length; i++) {
    count[arrayStr[i]] ? count[arrayStr[i]]++ : count[arrayStr[i]] = 1;
  }

  return count;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("the quick brown fox jumped over the lazy dog"));
