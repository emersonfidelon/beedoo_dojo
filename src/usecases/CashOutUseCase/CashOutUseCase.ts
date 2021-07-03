interface IWithdrawNote {
  note: string
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

    console.log('NOTAS SACADAS ', withdrawnNotes)
    
    return 'Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.'
  }

  private processNotesToWithdraw(valueToWithdraw) {

    const sortedNotes = this.availableNotes.sort((a, b) => b - a)

    let remaingValue = valueToWithdraw

    const withdrawnNotes = sortedNotes.map((note, index) => {

      let quantity = 0

      while (remaingValue >= note) {
        remaingValue -= note
        quantity++
      }
     return { value: note, quantity }

    })

   return withdrawnNotes.filter((withdrawnNote)=>withdrawnNote.quantity)
  }

  private generateWithdrawString() {

    const stringStart = 'Entregar'



    const withdrawNotes: IWithdrawNote[] = []

  }

}

export default CashOutUseCase;
