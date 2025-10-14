import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { ConsultaComponent } from './consulta/consulta';

export const routes: Routes = [
    { path: 'cadastro', component: Cadastro },
    { path: 'consulta', component: ConsultaComponent }
];
