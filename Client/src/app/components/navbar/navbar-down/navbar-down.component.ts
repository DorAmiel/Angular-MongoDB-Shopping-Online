import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/categories.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-navbar-down',
  templateUrl: './navbar-down.component.html',
  styleUrls: ['./navbar-down.component.css']
})
export class NavbarDownComponent implements OnInit {

  arry = [1, 2, 3, 4, 5, 6, 7, 8];
  categories: Category[] = [];


  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }


  //get all categories
  getCategories() {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

  

}

