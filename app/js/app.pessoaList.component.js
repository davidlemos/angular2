var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pessoa_service_1 = require('./services/pessoa.service');
var pessoa_model_1 = require('./model/pessoa.model');
var PessoaListComponent = (function () {
    function PessoaListComponent(pessoaService) {
        var _this = this;
        this.pessoaService = pessoaService;
        //this.pessoas = this.pessoaService.getPessoas();
        this.pessoaService.getPessoasApi().
            then(function (data) { return _this.setPessoas(data); }).catch(this.onError);
    }
    PessoaListComponent.prototype.setPessoas = function (data) {
        this.pessoas = new Array();
        for (var i = 0; i < data.length; i++) {
            var pessoa = new pessoa_model_1.Pessoa();
            pessoa.setNome(data[i].nome);
            pessoa.setIdade(data[i].idade);
            this.pessoas.push(pessoa);
        }
    };
    PessoaListComponent.prototype.onError = function (error) {
        console.log(error);
    };
    PessoaListComponent = __decorate([
        core_1.Component({
            selector: 'listPessoas',
            templateUrl: 'app/views/listPessoa.html',
            providers: [pessoa_service_1.PessoaService]
        }), 
        __metadata('design:paramtypes', [pessoa_service_1.PessoaService])
    ], PessoaListComponent);
    return PessoaListComponent;
}());
exports.PessoaListComponent = PessoaListComponent;
