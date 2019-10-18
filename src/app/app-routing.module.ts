import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/clientes',
    pathMatch:'full'

  },
  {
    path: 'clientes',
    component: ClienteListComponent
  },
  {
    path: 'clientes/add',
    component: ClienteFormComponent
  },
  {
    path: 'clientes/edit/:clienteid',
    component: ClienteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
