import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Credit } from 'src/app/core/models/credit.model';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  clients: Client[] = [];
  constructor(
    private location: Location,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.fetchCredits();
  }

  fetchCredits () {
      this.clientService.getAllClients().subscribe(clientList => {
        this.clients = Object.keys(clientList).map((key) => {
          const client: Client = clientList[key];
          client.key = key;
          if (client.credits){
            let creditsList: Credit[] = Object.keys(client.credits).map(key => {
              const credit: Credit = client.credits[key];
              credit.key = key;
              return credit;
            });
            client.credits = creditsList;
          }
          return client;
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

}
