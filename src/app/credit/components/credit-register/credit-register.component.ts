import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert2';
import { CreditService } from 'src/app/core/services/credit/credit.service';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-credit-register',
  templateUrl: './credit-register.component.html',
  styleUrls: ['./credit-register.component.css']
})
export class CreditRegisterComponent implements OnInit {
  
  client: Client;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private creditService: CreditService,
    private clientService: ClientService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.fetchClient();
  }
  
  private buildForm() {
    this.form = this.formBuilder.group({
      reference: ['', [Validators.required]],
      price: ['', [Validators.required]],
      date: ['', [Validators.required]],
      accepted: [true],
      payed: [false],
    });
  }

  validationField(field){
    return this.form.get(field).invalid && this.form.get(field).touched
  }

  fetchClient () {
    this.route.params.subscribe((params: Params) => {
      const clientKey = params.idClient;
      this.clientService.getClient(clientKey).subscribe(client => {
        this.client = client
        this.client.key = clientKey;
      });
    });
  }

  createCredit(event) {
    if (!this.form.invalid) {
      swal.fire({
        title: 'Espere',
        icon: 'info',
        text: 'Guardando Información',
        allowOutsideClick: false
      });
      swal.showLoading();
      const credit = this.form.value;
      this.creditService.createCredit(this.client.key, credit).subscribe((newCredit) => {
        swal.fire({
          title: `Éxito al crear un nuevo crédito al cliente ${this.client.name}.`,
          icon: 'success',
          text: 'Información Guardada correctamente'
        });
        this.router.navigate([`./credit/creditList/${this.client.key}`]);
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
