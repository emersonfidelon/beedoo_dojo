import { placar } from './placar-protocols'

export class Tenis implements placar {
    placar = {
        jogador1: 0,
        jogador2: 0
    }

    formatarPlacar(placar:number[]) {
        let pontosJogador1:number = placar[0]
        let pontosJogador2:number = placar[1]

        if(pontosJogador1 >= 40 && pontosJogador2 >= 40 && pontosJogador1 === pontosJogador2) {
            return 'DEUCE'
        }

       if(pontosJogador1 > pontosJogador2 && pontosJogador1 >= 40 && pontosJogador1 < pontosJogador2 - 10) {
            return 'ADVANTAGE JOGADOR 1'
       }

       if(pontosJogador2 > pontosJogador1 && pontosJogador1 >= 40 && pontosJogador2 > pontosJogador1 - 10) {
            return 'ADVANTAGE JOGADOR 2'
        }

        if(pontosJogador1 > 40 && placar [1] <= 40 && pontosJogador1 > pontosJogador2) {
            return 'JOGADOR 1 VENCEU'
        }

        if(pontosJogador2 > 40 && placar [0] <= 40 && pontosJogador1 > pontosJogador2) {
            return 'JOGADOR 2 VENCEU'
        }

        return `${this.placar.jogador1} - ${this.placar.jogador2}`
    }

    displayPlacar():any {
       return this.formatarPlacar([this.placar.jogador1, this.placar.jogador2]);
    } 

    novoPlacar = {
        0: 15,
        15: 30,
        30: 40,
        40: 50,
        50: 60
    };

    pontuar(player:string):void {
        this.placar[player] = this.novoPlacar[this.placar[player]];
    } 

    checarPontosValidos(points:number):boolean { 
        return [0, 15, 30, 40].indexOf(points) > -1
    }

    definirPlacar(placar:string):void {
        let [jogador1Pontos, jogador2Pontos] = placar.split('-').map(x => parseInt(x));
        this.placar = {
            jogador1: this.checarPontosValidos(jogador1Pontos) ? jogador1Pontos : 0,
            jogador2: this.checarPontosValidos(jogador2Pontos) ? jogador2Pontos : 0,
        };
    };
}