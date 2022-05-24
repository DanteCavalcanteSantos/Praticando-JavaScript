import {Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import{ContaPoupanca} from "./ContaPoupanca.js";
import{ContaEmpresarial} from "./ContaEmpresarial.js";

export class Conta extends Cliente{ 

constructor(ContaCorrente, ContaPoupanca){
    super(nome, cpf, agencia);
    }
}