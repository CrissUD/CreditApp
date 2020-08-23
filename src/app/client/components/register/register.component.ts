import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ClientService } from './../../../core/services/client/client.service';
import { CreditService } from './../../../core/services/credit/credit.service';
import { ClientEditComponent } from '../client-edit/client-edit.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formClient: FormGroup;
  formCredit: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private creditService: CreditService,
    private router: Router
  ) {
    this.buildFormClient();
    this.buildFormCredit();
  }

  ngOnInit(): void {}

  private buildFormClient() {
    this.formClient = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  private buildFormCredit() {
    this.formCredit = this.formBuilder.group({
      reference: ['', [Validators.required]],
      price: ['', [Validators.required]],
      date: ['', [Validators.required]],
      accepted: [true],
      payed: [false],
    });
  }

  validationFieldClient(field){
    return this.formClient.get(field).invalid && this.formClient.get(field).touched
  }

  validationFieldCredit(field){
    return this.formCredit.get(field).invalid && this.formCredit.get(field).touched
  }

  createClient(event: Event) {
    if (!this.formClient.invalid && !this.formCredit.invalid) {
      swal.fire({
        title: 'Espere',
        icon: 'info',
        text: 'Guardando Información',
        allowOutsideClick: false
      });
      swal.showLoading();
      const client = this.formClient.value;
      const credit = this.formCredit.value;
      this.clientService.createClient(client).subscribe((newClient) => {
        const newKey = Object.values(newClient)[0];
        console.log(newKey);
        this.creditService.createCredit(newKey, credit).subscribe((newCredit) => {
          swal.fire({
            title: `Éxito al crear al cliente ${client.name} y su respectivo crédito.`,
            icon: 'success',
            text: 'Información Guardada correctamente'
          });
          this.router.navigate(['./client']);
        });
      });
    } else {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algún dato quedo incompleto'
      });
    }
  }
}
