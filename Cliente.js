//Banco diferentão

export class Cliente{
    _nome;
    _cpf;
    _agencia;

constructor(nome, cpf, agencia){
    this._nome = nome;
    this._cpf = cpf;
    this._agencia = agencia;
}

 set(nomeNovo){
     this._nome = nomeNovo;
 }

 get nome(){
     return this.nome;
 }
 set(agenciaNova){
     this._agencia = agenciaNova;
 }
 get _agencia(){
    return this._agencia;
 }
}

