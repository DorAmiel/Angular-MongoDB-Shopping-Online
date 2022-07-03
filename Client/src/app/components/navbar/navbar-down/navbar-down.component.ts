import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-down',
  templateUrl: './navbar-down.component.html',
  styleUrls: ['./navbar-down.component.css']
})
export class NavbarDownComponent implements OnInit {

  arry = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() { }

  ngOnInit(): void {
  }

}
