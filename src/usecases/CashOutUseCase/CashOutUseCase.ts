interface IWithdrawnNote {
  note: number
  quantity: number
}
class CashOutUseCase {

  constructor(private availableNotes: number[] = [100, 50, 20, 10]) { }

  public execute(valueToWithdraw: number) {

    if (this.availableNotes.includes(valueToWithdraw)) {

      return `Entregar 1 nota de R$ ${valueToWithdraw},00.`;
    }
    if (valueToWithdraw % 10 !== 0) {
      return "Não há notas disponíveis para o valor informado.";
    }

    const withdrawnNotes = this.processNotesToWithdraw(valueToWithdraw)

    this.generateWithdrawString(withdrawnNotes)
    
    return 'Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.'
  }

  private processNotesToWithdraw(valueToWithdraw:number) {

    const sortedNotes = this.availableNotes.sort((a, b) => b - a)

    let remaingValue = valueToWithdraw

    const withdrawnNotes = sortedNotes.map((note, index) => {

      let quantity = 0

      while (remaingValue >= note) {
        remaingValue -= note
        quantity++
      }
     return { note, quantity }

    })

   return withdrawnNotes.filter((withdrawnNote)=>withdrawnNote.quantity)
  }

  private generateWithdrawString(withdrawnNotes:IWithdrawnNote[]) {

    const stringStart = `Entregar`

    let resultString = `${stringStart} ${withdrawnNotes[0].quantity} de R$ ${String(withdrawnNotes[0].note)},00`

    if(withdrawnNotes.length === 1 ){
      return resultString
    }

    const remainingWithdrawnNotes = withdrawnNotes.slice(1, withdrawnNotes.length)


    const resultStringArray: string[] = [resultString,
       ...remainingWithdrawnNotes.map((withdrawnNote)=>
       `e ${withdrawnNote.quantity} nota${withdrawnNote.quantity>1?'s':''} de R$ ${String(withdrawnNote.note)},00`)]



       console.log('STRING FINAL ', resultStringArray.join(" "))

  }



}

export default CashOutUseCase;
