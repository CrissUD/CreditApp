import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.onload = () => {
      document.querySelector('.cont_principal').className =
        'cont_principal cont_error_active';
    };
  }
}
