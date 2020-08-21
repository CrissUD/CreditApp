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
}
