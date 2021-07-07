import { Jogador } from "./Jogadores";
export function Regras(jogada1 : string, jogada2: string): String {
    const jogador1 = new Jogador();
    const jogador2 = new Jogador();
        const jogadasGanhadoras = {
            'PedraTesoura':'Pedra ganhou',
            'TesouraPedra':'Pedra ganhou',
            'TesouraPapel':'Tesoura ganhou',
            'PapelTesoura':'Tesoura ganhou',
            'PapelPedra':'Papel ganhou',
            'PedraPapel':'Papel ganhou',
        }
        
        if (
            !jogador1.jogadasValidas.includes(jogada1) ||
            !jogador2.jogadasValidas.includes(jogada2)
        ) {
            return "Jogada Inválida";
        }

        if (jogada1 == jogada2) {
            return 'Empate';
        }

        return jogadasGanhadoras[`${jogada1}${jogada2}`]

    }