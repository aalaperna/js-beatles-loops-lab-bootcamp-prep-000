function theBeatlesPlay (musicians, instruments) {
  var newArray = []
  for (var i=0; i < "${musicians.length}"; i++) {
    var array = ("${musicians[i]" + " plays " + "${instruments[i]}")
    newArray.push(array)
  }
  return newArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts) {
  var newArray = []
  let i = facts.length
  while (i !== 0) {
    newArray.push('${facts}' + "!!!");
    --i;
  }
  return newArray
}

function iLoveTheBeatles(n) {
  let newArray =[]
  do {
    newArray.push("I love the Beatles!");
    ++n
  }
  while (n <15);
  return newArray
}