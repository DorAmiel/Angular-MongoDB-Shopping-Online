import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserState } from 'src/app/selectors/user.selector';
import { User } from '../../../models/user';
import { logout } from 'src/app/actions/user.actions';


@Component({
  selector: 'app-navbar-up',
  templateUrl: './navbar-up.component.html',
  styleUrls: ['./navbar-up.component.css']
})
export class NavbarUpComponent implements OnInit {

  //use router
  @Input() currentCategory: Category = new Category();
  @Output() categoryEmmiter = new EventEmitter();

  user$: Observable<any>;
  loggedUser: User = new User();

  constructor(private router: Router, private store: Store) {
    this.user$ = this.store.select(selectUserState);
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      this.loggedUser = user;
    }
    )
  }

  ngOnChanges() {
    this.user$.subscribe(user => {
      this.loggedUser = user;
    });
  }

  //remove user from local storage
  logout() {
    alert('You have been logged out');
    this.store.dispatch(logout());
  }

  setCurrentCategory() {
    this.currentCategory = new Category();
    this.categoryEmmiter.emit(this.currentCategory);
  }

}
