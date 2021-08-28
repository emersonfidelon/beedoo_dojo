import { JogadaValida } from "../@types"
import { JogadaInvalida } from "../errors/jogada-invalida"

export default class JokenPoJuiz {
  constructor(private readonly jogadasValidas: Array<JogadaValida>) { }

  verificar(jogador1: JogadaValida, jogador2: JogadaValida): String {
    if (!this.jogadasValidas.includes(jogador1) || !this.jogadasValidas.includes(jogador2)) {
      JogadaInvalida.lacarErro(this.jogadasValidas, jogador1, jogador2)
    }

    return this.jogadaVencedora([jogador1, jogador2])
  }

  private jogadaVencedora(jogadas: Array<JogadaValida>): String {
    if (jogadas.some(jogada => jogada === 'Papel') && jogadas.some(jogada => jogada === 'Pedra'))
      return 'Papel ganhou'

    if (jogadas.some(jogada => jogada === 'Papel') && jogadas.some(jogada => jogada === 'Tesoura'))
      return 'Tesoura ganhou'

    if (jogadas.some(jogada => jogada === 'Pedra') && jogadas.some(jogada => jogada === 'Tesoura'))
      return 'Pedra ganhou'

    return 'Empate'
  }
}
