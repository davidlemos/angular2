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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var pessoa_model_1 = require('../model/pessoa.model');
var PessoaService = (function () {
    function PessoaService(http) {
        this.http = http;
        this.urlApi = 'http://tmebr.esy.es/apis/cardapio/pessoas';
        this.pessoas = new Array();
        var p;
        p = new pessoa_model_1.Pessoa();
        p.setNome('Zé');
        p.setIdade(22);
        this.pessoas.push(p);
        p = new pessoa_model_1.Pessoa();
        p.setNome('Dito');
        p.setIdade(17);
        this.pessoas.push(p);
        p = new pessoa_model_1.Pessoa();
        p.setNome('Maria');
        p.setIdade(34);
        this.pessoas.push(p);
    }
    PessoaService.prototype.calcMediaIdade = function () {
        var soma = 0;
        var size = this.pessoas.length;
        for (var i = 0; i < this.pessoas.length; i++) {
            soma += this.pessoas[i].getIdade();
        }
        if (size > 0) {
            return soma / size;
        }
        else {
            return 0;
        }
    };
    PessoaService.prototype.getPessoas = function () {
        return this.pessoas;
    };
    PessoaService.prototype.getPessoasApi = function () {
        return this.http.get(this.urlApi)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.onError);
    };
    PessoaService.prototype.onError = function (error) {
        var errMsg = (error.message) ? error.message : 'Server Error';
        return Promise.reject(errMsg);
    };
    PessoaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PessoaService);
    return PessoaService;
}());
exports.PessoaService = PessoaService;
