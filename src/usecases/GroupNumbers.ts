class GroupNumbers {
  handle(list: number[]) {
    const result: number[][] = [] // number[][] === Array<Array<number>>
    let currentGroup: number[] = []
    const check = (actual: number, next: any) => next !== undefined ? next - actual : next
    for (let i = 0; i < list.length; i++) {
      const actual = list[i]
      const next = list[i + 1]
      if (check(actual, next) === 1) {
        currentGroup.push(actual)
      } else {
        currentGroup.push(actual)
        result.push(currentGroup)
        currentGroup = []
      }
    }
    // console.log(result)
    if (result.length > 1) { return result } else { return result[0] }
  }

  handle2(list: number[]) {
    let currentGroup: number[] = []
    const result: number[][] = list.reduce((ac: number[][], val: number, i: number, list: number[]) => {
      const nextVal = list[i + 1]
      if (nextVal && nextVal - val === 1) {
        currentGroup.push(val)
      } else {
        currentGroup.push(val)
        ac.push(currentGroup)
        currentGroup = []
      }
      return ac
    }, [])
    // console.log(result)
    if (result.length > 1) { return result } else { return result[0] } // ou list
  }
}

export { GroupNumbers }
