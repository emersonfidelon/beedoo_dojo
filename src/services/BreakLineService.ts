import IBreakLineService from '../interfaces/IBreakLineService';
import { IBreakLineProps } from '../models/IBreakLineProps';

class BreakLineService implements IBreakLineService {

  public execute({ colunas, frase }: IBreakLineProps): string {
    let resultado = '';
    const palavras = frase.trim().split(' ');

    let linha = '';
    for (const palavra of palavras) {
      if (linha.length + palavra.length < colunas) {
        if (!linha)
          linha += palavra;
        else
          linha += ' ' + palavra;
      } else {
        resultado += `${linha}\n`;
        linha = palavra;
      }
    }

    if (linha) {
      resultado += linha;
    }

    return resultado;
  }
}

export default BreakLineService;