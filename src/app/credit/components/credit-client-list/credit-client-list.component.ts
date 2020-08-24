import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { CreditService } from 'src/app/core/services/credit/credit.service';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Credit } from 'src/app/core/models/credit.model';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-credit-client-list',
  templateUrl: './credit-client-list.component.html',
  styleUrls: ['./credit-client-list.component.css']
})
export class CreditClientListComponent implements OnInit {
  credits: Credit[] = [];
  client: Client;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private creditService: CreditService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.fetchCredits();
  }

  fetchCredits () {
    this.route.params.subscribe((params: Params) => {
      const key = params.idClient;
      this.clientService.getClient(key).subscribe(client => {
        this.client = client
        this.client.key = key;
      });
      this.creditService.getCreditsClient(key).subscribe((credits) => {
        this.credits = Object.keys(credits).map(key => {
          const credit: Credit = credits[key];
          credit.key = key;
          return credit;
        });
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
