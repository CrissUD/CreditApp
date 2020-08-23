import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credit } from './../../models/credit.model';

@Injectable({
  providedIn: 'root',
})
export class CreditService {
  URL = 'https://fir-acm-88a24.firebaseio.com/';

  constructor(private http: HttpClient) {}

  createCredit(id: string, credit: Credit) {
    return this.http.post(`${this.URL}clients/${id}/credits.json`, credit);
  }

  getCreditsClient(keyClient: string) {
    return this.http.get<Credit>(`${this.URL}/clients/${keyClient}/credits.json`);
  }

  getCredit(keyClient: string, keyCredit) {
    return this.http.get<Credit>(`${this.URL}/clients/${keyClient}/credits/${keyCredit}.json`);
  }
}
