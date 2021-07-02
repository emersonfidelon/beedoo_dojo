export default class JokenPoJuiz {
    private readonly jogadasValidas = ['Pedra', 'Papel', 'Tesoura'];

    jogadaInvalida(jogador1, jogador2): boolean {
        return (!this.jogadasValidas.includes(jogador1) || !this.jogadasValidas.includes(jogador2))
    }

    private readonly ganhaPerde = {
        'Pedra':'Tesoura',
        'Tesoura':'Papel',
        'Papel':'Pedra',
    }

    compara(ganha, perde, jogador1, jogador2): string {
        let result: string = '';

        if((`${jogador1}${jogador2}` == `${ganha}${perde}`) || (`${jogador1}${jogador2}` == `${perde}${ganha}`)){
            result = `${ganha} ganhou`;
        }

        return result;
    }

    ganhador(jogador1, jogador2): string {
        let result: string = '';

        for (const ganha of Object.keys(this.ganhaPerde)){
            let perde : string  = this.ganhaPerde[ganha]

            if (result = this.compara(ganha, perde, jogador1, jogador2)) break;
        };

        return result;
    }

    verificar(jogador1, jogador2): string {
        let result: string = 'Empate';

        if ( this.jogadaInvalida(jogador1, jogador2) ) {
            result = 'Jogada Inválida';
        } else if ( jogador1 != jogador2 ) {
            result = this.ganhador(jogador1, jogador2);
        }

        return result;
    }
}
