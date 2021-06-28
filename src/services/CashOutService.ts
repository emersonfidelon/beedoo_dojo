type INotes = {
  [key: string]: number;
};

class CashOutService {
  public execute(withdrawalValue: number) {
    const availableNotes = [100, 50, 20, 10];
    let currentWithdrawalValue = withdrawalValue;

    if (!withdrawalValue) {
      throw new Error("Withdrawal value must be valid.");
    }

    if (availableNotes.includes(withdrawalValue)) {
      return withdrawalValue;
    }

    if (withdrawalValue % 10 !== 0) {
      return "Não há notas disponíveis para o valor informado.";
    }

    const notes = availableNotes.reduce((accum: INotes, note: number) => {
      while (currentWithdrawalValue >= note) {
        currentWithdrawalValue -= note;

        if (accum[note]) {
          accum[note] = accum[note] + 1;
        } else {
          accum[note] = 1;
        }
      }

      return accum;
    }, {});

    return this.generateWithdrawalResult(notes);
  }

  private toFixedWithComma(number: string, decimals: number) {
    return Number(number).toFixed(decimals).replace(".", ",");
  }

  private generateWithdrawalResult(notes: INotes) {
    const result = Object.keys(notes)
      .reverse()
      .map((note, index) => {
        let result = "";

        result = `Entregar ${notes[note]} nota de R$${this.toFixedWithComma(
          note,
          2
        )}`;

        if (index > 0) {
          result = `e ${notes[note]} nota de R$ ${this.toFixedWithComma(
            note,
            2
          )}`;
        }

        return result;
      })
      .join(" ");

    return result + ".";
  }
}

export default CashOutService;
