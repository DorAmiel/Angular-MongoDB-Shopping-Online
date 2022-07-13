import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-navbar-up',
  templateUrl: './navbar-up.component.html',
  styleUrls: ['./navbar-up.component.css']
})
export class NavbarUpComponent implements OnInit {

  //use router
  @Input() currentCategory: Category = new Category();
  @Output() categoryEmmiter = new EventEmitter();

  loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
  constructor() { }

  ngOnInit(): void {
    console.log(this.loggedUser.username);
  }

  //remove user from local storage
  logout() {
    localStorage.removeItem('user');
    alert('You have been logged out');
    this.loggedUser = !this.loggedUser;
  }

  setCurrentCategory() {
    this.currentCategory = new Category();
    console.log(this.currentCategory);
    this.categoryEmmiter.emit(this.currentCategory);
  }

}
