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
  if(!source || typeof (source) !== 'object') {
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
var o1 = {
  info:{
    name:"马东升",
    age:"25",
    sex:"man"
  },
  func:function(){
    return "ok"
  },
  arr:['html','css','js']
}
var o3 =deepClone(o1)
console.log(o3 === o1)
console.log(o3.info === o1.info)
console.log(o3.func === o1.func)