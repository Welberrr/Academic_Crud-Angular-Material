import { Injectable } from '@angular/core';
import { cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  constructor() { }

  salvar(cliente: cliente){
    console.log(cliente);
  }
}
