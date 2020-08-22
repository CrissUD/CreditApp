import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  @Input() client: Client;

  constructor() {}

  ngOnInit(): void {}
}
