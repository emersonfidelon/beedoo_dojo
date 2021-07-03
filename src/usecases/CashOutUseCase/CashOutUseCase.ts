interface IWithdrawNoteResult{
  note:string
  quantity:number
}
class CashOutUseCase {

  constructor(private availableNotes:number[] = [100, 50, 20, 10]){}

  public execute(valueToWithDraw: number) {
    
    if (this.availableNotes.includes(valueToWithDraw)) {

      return`Entregar 1 nota de R$ ${valueToWithDraw},00.`;
    }
    if (valueToWithDraw % 10 !== 0) {
      return "Não há notas disponíveis para o valor informado.";
    }


    return 'Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.'

  }

  private processValueToWithDraw(valueToWithDraw){


    const sortedNotes  = this.availableNotes.sort((a,b)=>b-a)




    sortedNotes.forEach((availableNote)=>{
      if(availableNote < valueToWithDraw){

        `e ${ valueToWithDraw / availableNote} de R$ ${ availableNote+',00'}`

      }
        
      })
        
    
  }

  private generateWithdrawStrin(){

    const withdrawNoteResult: IWithdrawNoteResult[] = []
    
  }

}

export default CashOutUseCase;
