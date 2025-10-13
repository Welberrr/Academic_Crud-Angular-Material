
import { v4 as uuid } from 'uuid';
export class cliente {
    id?: String;
    nome?: String;
    cpf?: String;
    dataNascimento?: String;
    email?: String;

    static newCliente(){
        let client = new cliente();
        let id = uuid();
        return cliente;
    }
}