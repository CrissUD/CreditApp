import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientListComponent } from './components/client-list/client-list.component';

@NgModule({
  declarations: [ClientEditComponent, ClientListComponent, RegisterComponent],
  imports: [CommonModule, ClientRoutingModule, ReactiveFormsModule],
})
export class ClientModule {}
