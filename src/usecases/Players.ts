export class Player {
    private readonly _validPlays = ["Rock", "Paper", "Scissors"];

    get validPlays() {
        return this._validPlays
    }
}