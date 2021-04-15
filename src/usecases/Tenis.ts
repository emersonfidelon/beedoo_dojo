import { placar } from './placar-protocols'

class Tenis {
    jogador1 = 0;
    jogador2 = 1;
    placar:number[]=[0,0];

    pontuar(jogador):void {
        this.placar[jogador] += 15;
    }

}

export { Tenis }
