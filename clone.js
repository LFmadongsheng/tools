// shallow Clone
function shallowClone (source ){
  if(!source || typeof (source) !== 'object') {
    throw new Error('error arguments')
  }
  let targetObj = source.constructor === Array ? [] : {}
  for (var keys in source) {
    if(source.hasOwnProperty(keys)){
      targetObj[keys] = source[keys]
    }
  }
}

// deep clone
function deepClone(source){
  if(!source || source.constructor !== 'object') {
    throw new Error('error arguments')
  }
  let targetObj = source.constructor === Array ? [] : {} 
  for(var keys in source){
    if(source.hasOwnProperty(keys)){
      if(source[keys] && typeof source[keys] === 'object'){
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}