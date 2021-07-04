interface IWithdrawnNote {
  note: number
  quantity: number
}
class CashOutUseCase {

  constructor(private availableNotes: number[] = [100, 50, 20, 10]) { }

  public execute(valueToWithdraw: number) {

    if (valueToWithdraw % 10 !== 0) {
      throw Error('Não há notas disponíveis para o valor informado.');
    }

    const withdrawnNotes = this.processNotesToWithdraw(valueToWithdraw)

    const resultString = this.generateWithdrawString(withdrawnNotes)

    return resultString
  }

  private processNotesToWithdraw(valueToWithdraw: number) {

    const sortedNotes = this.availableNotes.sort((a, b) => b - a)

    let remaingValue = valueToWithdraw

    const withdrawnNotes = sortedNotes.map((note) => {

      let quantity = 0

      while (remaingValue >= note) {
        remaingValue -= note
        quantity++
      }

      return { note, quantity }

    })

    return withdrawnNotes.filter((withdrawnNote) => withdrawnNote.quantity)
  }

  private generateWithdrawString(withdrawnNotes: IWithdrawnNote[]) {

    const stringStart = `Entregar`

    const firstStringHalf = `${stringStart} ${withdrawnNotes[0].quantity} nota${withdrawnNotes[0].quantity > 1 ? 's' : ''} de R$ ${String(withdrawnNotes[0].note)},00`

    if (withdrawnNotes.length === 1) {
      return firstStringHalf + '.'
    }

    const secondStringHalfNotes = withdrawnNotes.slice(1, withdrawnNotes.length)

    const secondStringHalf = secondStringHalfNotes.map((withdrawnNote) =>
      `e ${withdrawnNote.quantity} nota${withdrawnNote.quantity > 1 ? 's' : ''} de R$ ${String(withdrawnNote.note)},00`)

    const resultStringArray: string[] = [firstStringHalf, ...secondStringHalf]

    const resultString = resultStringArray.join(' ') + '.'

    return resultString

  }
}

export default CashOutUseCase;
