import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //remove user from local storage
  logout() {
    localStorage.removeItem('user');
    alert('You have been logged out');
    this.loggedUser = !this.loggedUser;
    this.router.navigate(['home']);
  }

  setCurrentCategory() {
    this.currentCategory = new Category();
    this.categoryEmmiter.emit(this.currentCategory);
  }

}
