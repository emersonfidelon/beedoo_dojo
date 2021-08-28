import { JogadaValida } from "../@types"

export class JogadaInvalida {

  static lacarErro(jogadasValidas: Array<JogadaValida>, jogada1: JogadaValida, jogada2: JogadaValida) {
    if (!jogadasValidas.includes(jogada1) && !jogadasValidas.includes(jogada2))
      throw new Error(`${jogada1} e ${jogada2} não são jogadas válidas`)

    if (!jogadasValidas.includes(jogada1))
      throw new Error(`${jogada1} não é uma jogada válida`)

    if (!jogadasValidas.includes(jogada2))
      throw new Error(`${jogada2} não é uma jogada válida`)
  }

}
