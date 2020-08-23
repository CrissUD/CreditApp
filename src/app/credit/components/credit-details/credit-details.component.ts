import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CreditService } from 'src/app/core/services/credit/credit.service';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/core/models/client.model';
import { Credit } from 'src/app/core/models/credit.model';

@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {

  credit: Credit;
  client: Client;

  constructor(
    private route: ActivatedRoute,
    private creditService: CreditService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.fetchCredits();
  }

  fetchCredits () {
    this.route.params.subscribe((params: Params) => {
      const clientKey = params.idClient;
      const creditKey = params.idCredit;
      this.clientService.getClient(clientKey).subscribe(client => {
        this.client = client
        this.client.key = clientKey;
      });

      this.creditService.getCredit(clientKey, creditKey).subscribe(credit => {
        this.credit = credit;
        this.credit.key = creditKey;
      });
    });
  }

}
