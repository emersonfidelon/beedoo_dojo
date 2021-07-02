export default class JokenPoJuiz {
    private readonly jogadasValidas = ['Pedra', 'Papel', 'Tesoura'];
        
    private readonly jogadasGanhadoras = {
        'PedraTesoura':'Pedra ganhou',
        'TesouraPedra':'Pedra ganhou',
        'TesouraPapel':'Tesoura ganhou',
        'PapelTesoura':'Tesoura ganhou',
        'PapelPedra':'Papel ganhou',
        'PedraPapel':'Papel ganhou',
    }

    jogadaInvalida(jogador1, jogador2): boolean {
        return (!this.jogadasValidas.includes(jogador1) || !this.jogadasValidas.includes(jogador2))
    }

    verificar(jogador1, jogador2): string {
        let result: string = 'Empate';

        if ( this.jogadaInvalida(jogador1, jogador2) ) {
            result = 'Jogada Inválida';
        } else if ( jogador1 != jogador2 ) {
            result = this.jogadasGanhadoras[`${jogador1}${jogador2}`];
        }

        return result;
    }
}
