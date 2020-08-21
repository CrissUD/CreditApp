import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientService } from './services/client/client.service';
import { CreditService } from './services/credit/credit.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ClientService, CreditService],
})
export class CoreModule {}
