import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moveMenu(event, gridMenu, logoDiv){
    gridMenu.classList.toggle('activate');
    logoDiv.classList.toggle('activate');
  }

}
