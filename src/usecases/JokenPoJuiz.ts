export default class JokenPoJuiz {
  constructor(private readonly jogadasValidas: Array<string>) { }

  private readonly jogadasGanhadoras = {
    'PedraTesoura': 'Pedra ganhou',
    'TesouraPedra': 'Pedra ganhou',
    'TesouraPapel': 'Tesoura ganhou',
    'PapelTesoura': 'Tesoura ganhou',
    'PapelPedra': 'Papel ganhou',
    'PedraPapel': 'Papel ganhou',
  }

  verificar(jogador1, jogador2): String {
    if (!this.jogadasValidas.includes(jogador1) || !this.jogadasValidas.includes(jogador2)) {
      return 'Jogada Inválida';
    }

    if (jogador1 == jogador2) {
      return 'Empate';
    }

    return this.jogadasGanhadoras[`${jogador1}${jogador2}`]

  }
}
