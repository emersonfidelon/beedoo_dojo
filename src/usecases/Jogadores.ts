export class Jogador {
    private readonly _jogadasValidas = ["Pedra", "Papel", "Tesoura"];

    get jogadasValidas() {
        return this._jogadasValidas
    }
}

