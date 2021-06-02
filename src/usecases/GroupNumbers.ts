class GroupNumbers {
  handle (list: Array<number>) {
    const result = []    
    let currentGroup = []
    
    list.forEach((item, index) => {
      let check = typeof list[index + 1] !== 'undefined' ? list[index + 1] - item : 0 // 1 - 2 
      if(check == 1){
        currentGroup.push(item) // [1,2]
      }else{        
        if(item == list[list.length-1]){
          currentGroup.push(item)
          result.push(currentGroup)    
        }        
        else {
          result.push(currentGroup) // []
          currentGroup = []
          currentGroup.push(item) // [5]
        }
      }
    })
    console.log(result)
    return result.length == 1 ? result[0] : result
  }
}

export { GroupNumbers }
