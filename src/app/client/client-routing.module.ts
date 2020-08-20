import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/client',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: ClientListComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: ':id',
    component: ClientEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
