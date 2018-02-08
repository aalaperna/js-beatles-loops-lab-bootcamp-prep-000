function theBeatlesPlay (musicians, instruments) {
  var newArray = []
  for (var i = 0; i < '${musicians.length}'; i++) {
    var array = ('${musicians[i]' + " plays " + '${instruments[i]}')
    newArray.push(array)
  }
  return newArray
}


function johnLennonFacts(facts) {
  var array = []
  let i = facts.length
  let j = 0
  while (i !== 0) {
    array.push('${facts[j]}' + "!!!");
    --i;
    ++j
  }
  return array
}

function iLoveTheBeatles(n) {
  let array = []
  do {
    array.push("I love the Beatles!");
    ++n
  }
  while (n < 15);
  return array
}