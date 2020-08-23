import { Component, OnInit } from '@angular/core';

import { Client } from './../../../core/models/client.model';
import { ClientService } from './../../../core/services/client/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients () {
    this.clientService.getAllClients().subscribe((cli) => {
      this.clients = Object.keys(cli).map((key) => {
        const client: Client = cli[key];
        client.key = key;
        return client;
      });
    });
  }
}
