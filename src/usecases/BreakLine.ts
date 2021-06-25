import IBreakLineService from "../interfaces/IBreakLineService";
import { IBreakLineProps } from "../models/IBreakLineProps";
import BreakLineService from "../services/BreakLineService";
import Validations from '../validations';

class BreakLine {
    private frase: string;
    private colunas: number;
    private countQuebraLinha: number;
    private breakLineService: IBreakLineService;

    constructor({ colunas, frase }: IBreakLineProps) {
        this.breakLineService = new BreakLineService();

        this.frase = frase;
        this.colunas = colunas;
        this.countQuebraLinha = 0;


        this.validate();
    }

    public handleWord(): string {
        const resultado = this.breakLineService.execute({
            colunas: this.colunas,
            frase: this.frase
        });

        return resultado.trim();
    }

    private validate(): void {
        const validation = new Validations();

        validation.hasMinLen(this.frase, 1, 'A frase deve conter ao menos um caractere');
        validation.isLowerThan(this.colunas, 1, 'A quantidade de coluna deve ser maior do que zero');
        validation.isInteger(this.colunas, 'A quantidade de coluna deve ser um inteiro');
    }
}

export default BreakLine
