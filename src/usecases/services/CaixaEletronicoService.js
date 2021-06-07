"use strict";
exports.__esModule = true;
var CaixaEletronicoService = /** @class */ (function () {
    function CaixaEletronicoService(notas_disponiveis, valor_saque) {
        this.notas_disponiveis = notas_disponiveis;
        this.valor_saque = valor_saque;
    }
    CaixaEletronicoService.prototype.execute = function () {
        var errors = this.handleValorSaque(this.valor_saque);
        if (errors) {
            return errors;
        }
        var notas = this.handleCalculateValorSaque(this.valor_saque);
        var notas_quantidade = this.handleCountByNota(notas);
        return this.handleResult(notas_quantidade);
    };
    CaixaEletronicoService.prototype.handleValorSaque = function (valor_saque) {
        if (valor_saque <= 0) {
            return 'Valor de saque precisa ser maior que 0';
        }
        if (this.notas_disponiveis.includes(valor_saque)) {
            return valor_saque;
        }
        if (valor_saque % 10 !== 0) {
            return 'Ná há notas disponíveis para o valor informado.';
        }
    };
    CaixaEletronicoService.prototype.handleCountByNota = function (notas) {
        var intersects = [];
        this.notas_disponiveis.forEach(function (nota) {
            var quantidade = notas.filter(function (item) { return item == nota; }).length;
            if (quantidade == 0) {
                return;
            }
            intersects.push({
                nota: nota,
                quantidade: quantidade
            });
        });
        return intersects;
    };
    CaixaEletronicoService.prototype.handleCalculateValorSaque = function (valor_saque) {
        var notas = [];
        var total = 0;
        var restante = valor_saque;
        this.notas_disponiveis.map(function (nota) {
            while (nota < valor_saque && total < valor_saque && nota <= restante) {
                notas.push(nota);
                total = notas.reduce(function (total, num) {
                    return total + num;
                });
                restante = valor_saque - total;
            }
        });
        return notas;
    };
    CaixaEletronicoService.prototype.handleResult = function (notas_quantidade) {
        var result = '';
        notas_quantidade.forEach(function (item, index) {
            if (index > 0) {
                result += ' e ';
            }
            result += item.quantidade + " nota de R$ " + item.nota + ",00";
        });
        return "Entregar " + result + ".";
    };
    return CaixaEletronicoService;
}());
exports["default"] = CaixaEletronicoService;
