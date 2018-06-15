export class Produto {
    _id:number;
    _nome:string;
    _detalhes:string;

    constructor(nome:string, detalhes:string){
        this._id = Math.floor(Math.random() * 1000);
        this._nome = nome;
        this._detalhes = detalhes;
    }

    set id(id:number){
        this._id = id;
    }

    set nome(nome:string){
        this._nome = nome;
    }

    set detalhes(detalhes:string){
        this._detalhes = detalhes;
    }

    get id(){
        return this._id;
    }

    get nome(){
        return this._nome;
    }

    get detalhes(){
        return this._detalhes;
    }
}
