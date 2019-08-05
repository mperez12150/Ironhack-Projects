function XO(myString){
  lowered = myString.toLowerCase()
  var x = 0
  var o = 0
  for (var i = 0; i < lowered.length; i++){
    if(lowered[i] === 'x'){
      x ++
    } 
	else if(lowered[i] === 'o'){
      o ++
    } 
  }
  return x === o
}