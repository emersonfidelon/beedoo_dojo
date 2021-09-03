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
}

export { GroupNumbers }
