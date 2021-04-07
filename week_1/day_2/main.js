const _ = {}

_.each = (array, iteratee) => {
for (let i = 0; i < array.length; i++){
  iteratee(array[i], i, array)
}
}

_.map = (array, iteratee) => {
  const newArray = []
    for (let i = 0; i < array.length; i++ ){
      newArray.push(iteratee(array[i], i, array))
    }
  return newArray
    
}

_.filter = (array, predicate) => {
  const newArray = []
    for (let i = 0; i < array.length; i++ ){
      if (predicate(array[i], i, array) === true){ 
        newArray.push(array[i])
      }
    }
  return newArray
}


_.find = (array, predicate) => {
  let result = undefined
  for (let i = 0; i < array.length; i++ ){
    if (predicate(array[i], i, array) === true){
      result = array[i]
      return result
    }
  }
}


_.random = (min, max) => {
  let i = min
  let j = max
  if (max === undefined){
    i = 0
    j = min
  }
  let randomizer = Math.floor(Math.random() * (j - i) + i)
  return randomizer
}

_.range = (start, stop, step) => {
  let array = []
  if (stop === undefined && step === undefined){
    start = 0
    stop = start
    step = 1
  }else if (step === undefined){
    step = 1
  }
  
  for (let i = start; i < stop; i += step){
    array.push(i)
  }
  return array
}


export default _
