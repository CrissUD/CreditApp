import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
})
export class ClientEditComponent implements OnInit {
  form: FormGroup;
  client: Client;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const key = params.id;
      this.clientService.getClient(key).subscribe((cli) => {
        cli.key = key;
        this.client = cli;
        console.log(this.client);
        this.form.patchValue(this.client);
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  updateClient(event: Event) {
    const clientUpdate = this.form.value;
    console.log(clientUpdate);
    this.clientService
      .updateClient(this.client.key, clientUpdate)
      .subscribe((clientUpdated) => {
        alert('el cliente se actualizo');
        this.router.navigate(['./client']);
      });
  }
}
