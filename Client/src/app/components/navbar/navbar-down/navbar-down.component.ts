import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  currentCategory: Category = new Category();
  @Output() categoryEmmiter = new EventEmitter();


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

  //get current category
  getCurrentCategory(category: Category) {
    this.currentCategory = category;
    this.categoryEmmiter.emit(this.currentCategory);
  }
}

