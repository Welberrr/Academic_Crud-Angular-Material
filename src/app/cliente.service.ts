import { Injectable } from '@angular/core';
import { cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  static REPO_CLIENTE = 'clientes';
  constructor() { }

  salvar(cliente: cliente){
    console.log(cliente);
  }

  obterStorage(): cliente[]{
    const Repositorioclientes = localStorage.getItem(ClienteService.REPO_CLIENTE);
    if(Repositorioclientes){
      const clientes: cliente[] =  JSON.parse(Repositorioclientes);
      return clientes;
    }

    const clientes: cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTE, JSON.stringify(clientes));
    return clientes;
  }
}
