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

  getAllClients() {
    return this.http.get<Client[]>(`${this.URL}/clients.json`);
  }

  getClient(key: string) {
    return this.http.get<Client>(`${this.URL}/clients/${key}.json`);
  }

  createClient(client: Client) {
    return this.http.post(`${this.URL}clients.json`, client);
  }

  updateClient(key: string, client: Client) {
    return this.http.put(`${this.URL}clients/${key}.json`, client);
  }
}
