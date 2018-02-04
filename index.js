function theBeatlesPlay(musicians, instruments){
  var array = new Array();
  for (let i = 0 ;i < musicians.length ; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var n = facts.length
  while(n > 0) {
    facts[${n}] = `${facts[n]}!!!`
    --n
  }
  return facts
}