function blendWords(word1, word2) {
  const word1hf = word1.slice(0, word1.length / 2);
  const word2hf = word2.slice(-(Math.round(word2.length / 2)));

  const res = word1hf + word2hf;
  console.log(res)
  return res;
}

blendWords("turtle", "toucan")
// should return "turcan"

blendWords("hyena", "iguana")
// should return "hyana"

blendWords("falcon", "pelican")
//  should return "falican"

blendWords("platypus", "wolverine")
//  should return "platerine"