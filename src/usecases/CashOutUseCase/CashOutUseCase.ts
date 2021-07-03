
class CashOutUseCase {

  constructor(private availableNotes:number[] = [100, 50, 20, 10]){}

  public execute(withdrawalValue: number) {

    if (this.availableNotes.includes(withdrawalValue)) {
      return withdrawalValue;
    }

    if (withdrawalValue % 10 !== 0) {
      return "Não há notas disponíveis para o valor informado.";
    }

    return 'Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.'

  }
}

export default CashOutUseCase;
