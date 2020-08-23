import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditListComponent } from './components/credit-list/credit-list.component';
import { CreditClientListComponent } from './components/credit-client-list/credit-client-list.component';
import { CreditEditComponent } from './components/credit-edit/credit-edit.component';
import { CreditDetailsComponent } from './components/credit-details/credit-details.component';


const routes: Routes = [
  {
    path: '',
    component: CreditListComponent,
  },
  {
    path: 'creditList/:idClient',
    component: CreditClientListComponent,
  },
  {
    path: ':idCredit',
    component: CreditDetailsComponent,
  },
  {
    path: ':idClient/:idCredit',
    component: CreditDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRoutingModule { }
