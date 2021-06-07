import Service  from "../interfaces/service";

class CaixaEletronicoService implements Service
{
    private notas_disponiveis: number[];
    private valor_saque: number;

    constructor(notas_disponiveis: number[], valor_saque: number) {
        this.notas_disponiveis = notas_disponiveis;
        this.valor_saque = valor_saque;
    }

    execute(): any {
        const errors = this.handleValorSaque(this.valor_saque)

        if (errors) {
            return errors;
        }

        let notas = this.handleCalculateValorSaque(this.valor_saque)

        let notas_quantidade = this.handleCountByNota(notas)
    
        return this.handleResult(notas_quantidade);
    }

    handleValorSaque(valor_saque: number): string | number | void {

        if (valor_saque <= 0) {
            return 'Valor de saque precisa ser maior que 0'
        } 

        if(this.notas_disponiveis.includes(valor_saque)) {
            return valor_saque;
        }
        
        if(valor_saque % 10 !==0) {
            return 'Ná há notas disponíveis para o valor informado.';
        }
    }

    handleCountByNota(notas: number[])  {
        let intersects = []

        this.notas_disponiveis.forEach(nota => {

            let quantidade = notas.filter(item => item == nota).length;

            if (quantidade == 0) {
                return;
            }

            intersects.push({
                nota,
                quantidade
            })
        })

        return intersects;
    }

    handleCalculateValorSaque(valor_saque: number): number[] {
        let notas = []

        let total = 0;
        let restante = valor_saque;
    
        this.notas_disponiveis.map((nota) => {
            
            while (nota < valor_saque && total < valor_saque && nota <= restante) {
                
                notas.push(nota)
    
                total = notas.reduce((total, num) => {
                    return total + num;
                });
    
                restante = valor_saque - total;
            }
        })

        return notas;
    }

    handleResult(notas_quantidade): string {
        let result = '';
        notas_quantidade.forEach((item, index) => {
            if (index > 0) {
                result+=' e '
            }
    
            result += `${item.quantidade} nota de R$ ${item.nota},00`
        })

        return `Entregar ${result}.`
    }
}

export default CaixaEletronicoService;