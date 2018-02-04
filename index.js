function theBeatlesPlay(musicians, instruments){
  var array = new Array();
  for (let i = 0 ;i < musicians.length ; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var n = 
  while(facts.length > 0) {
    facts[facts.length] = `${facts[facts.length]}!!!`
    --facts.length
  }
  return facts
}