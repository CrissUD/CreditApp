import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './../../models/client.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  URL = 'https://fir-acm-88a24.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getAllClients() {}

  getClient() {}

  createClient(client: Client) {
    return this.http.post(`${this.URL}clients.json`, client);
  }

  updateClient() {}
}
