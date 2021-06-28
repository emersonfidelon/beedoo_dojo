type INotes = {
  [key: string]: number;
};

class CashOutService {
  execute(withdrawalValue: number) {
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
  }
}

export default CashOutService;
