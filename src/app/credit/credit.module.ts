import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRoutingModule } from './credit-routing.module';
import { CreditClientListComponent } from './components/credit-client-list/credit-client-list.component';
import { CreditListComponent } from './components/credit-list/credit-list.component';
import { CreditEditComponent } from './components/credit-edit/credit-edit.component';
import { CreditComponent } from './components/credit/credit.component';
import { CreditDetailsComponent } from './components/credit-details/credit-details.component';
import { CreditRegisterComponent } from './components/credit-register/credit-register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreditClientListComponent, CreditListComponent, CreditEditComponent, CreditComponent, CreditDetailsComponent, CreditRegisterComponent],
  imports: [
    CommonModule,
    CreditRoutingModule, 
    ReactiveFormsModule
  ]
})
export class CreditModule { }
