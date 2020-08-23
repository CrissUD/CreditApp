import { Component, OnInit, Input } from '@angular/core';
import { Credit } from 'src/app/core/models/credit.model';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  @Input() credit: Credit;
  @Input() client: Client;
  constructor() { }

  ngOnInit(): void {
  }

}
