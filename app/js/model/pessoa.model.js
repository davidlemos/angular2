var Pessoa = (function () {
    function Pessoa() {
        this.nome = '';
        this.idade = 0;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
