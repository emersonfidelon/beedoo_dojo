class ConversorDeNumeroRomano {
    converter(algarismoRomano: String): number {
        return new TabelaRomana().getTabela(algarismoRomano);
    }
}

interface ITabela {
    readonly tabela;
}

class TabelaRomana implements ITabela {
    tabela = {
        "I": 1,
        "V": 5,
    }

    public getTabela(algarismo) : number {
        return this.tabela[algarismo];
    }
}

export { ConversorDeNumeroRomano }
