import { Injectable } from '@angular/core';
import { cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nomeBusca: string) : cliente[] {

    const clientes = this.obterStorage();

    if(!nomeBusca){
      return clientes;
    }

    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1)
  }

  buscarClientePorId(id: string) : cliente | undefined {
    const clientes = this.obterStorage();
    return clientes.find(cliente => cliente.id === id)
  }

  private obterStorage() : cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorioClientes){
      const clientes: cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }
    
    const clientes: cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}