import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { v4 as uuid } from 'uuid'; // Import uuid directly here

@Component({
  selector: 'app-cadastro',
  // Standalone components are the modern approach in Angular
  standalone: true, 
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent implements OnInit {
  cliente: Cliente = new Cliente(); // Initialize with a new empty client
  atualizando: boolean = false;

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    // A better way to get route params
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      let clienteEncontrado = this.service.buscarClientePorId(id);
      if (clienteEncontrado) {
        this.atualizando = true;
        this.cliente = clienteEncontrado;
      }
    }
  }

  salvar() {
    // --- CORREÇÃO PRINCIPAL ---
    // Garante que o cliente tenha um ID antes de salvar.
    // Se for um novo cliente (sem ID), gera um novo UUID.
    // Se for um cliente existente, o ID dele será mantido.
    if (!this.cliente.id) {
      this.cliente.id = uuid();
    }

    this.service.salvar(this.cliente);
    
    // Limpa o formulário e reseta o estado para um novo cadastro
    this.cliente = new Cliente();
    this.atualizando = false;

    // Opcional: Redirecionar para a lista de clientes após salvar
    // this.router.navigate(['/clientes']); 
    
    console.log('Cliente salvo:', this.cliente);
  }
}
