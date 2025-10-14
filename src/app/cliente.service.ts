import { Injectable } from '@angular/core';
import { cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  static REPO_CLIENTE = 'clientes';
  constructor() { }

  salvar(cliente: cliente){
    const storage = this.obterStorage();
    storage.push(cliente);
    
    localStorage.setItem(ClienteService.REPO_CLIENTE, JSON.stringify(storage));
  }

  pesquisarClientes(nome: string): cliente[] {
    this.obterStorage();
    return this.pesquisarClientes(nome);
  }

  private obterStorage(): cliente[]{
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
