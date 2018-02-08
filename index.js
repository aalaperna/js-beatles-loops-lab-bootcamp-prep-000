function theBeatlesPlay (musicians, instruments) {
  var musiciansArray = newArray()
  for (var i = 0; i < musicians.length; i++) {
    musiciansArray[i] = ('${musicians[i]} plays ${instruments[i]}')
  }
  return musiciansArray
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