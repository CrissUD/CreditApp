import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import swal from 'sweetalert2';
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
    private location: Location,
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

  validationField(field){
    return this.form.get(field).invalid && this.form.get(field).touched
  }

  updateClient(event: Event) {
    if (!this.form.invalid) {
      swal.fire({
        title: 'Espere',
        icon: 'info',
        text: 'Guardando Información',
        allowOutsideClick: false
      });
      swal.showLoading();
      let clientUpdate: Client = this.form.value;
      clientUpdate.credits = this.client.credits;
      this.clientService
        .updateClient(this.client.key, clientUpdate)
        .subscribe((clientUpdated: Client) => {
          swal.fire({
            title: `Éxito al actualizar al cliente ${clientUpdate.name}.`,
            icon: 'success',
            text: 'Información Guardada correctamente'
          });
          this.router.navigate(['./client']);
      });
    } else {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algún dato quedo incompleto'
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
