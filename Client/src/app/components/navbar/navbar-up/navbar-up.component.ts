import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-up',
  templateUrl: './navbar-up.component.html',
  styleUrls: ['./navbar-up.component.css']
})
export class NavbarUpComponent implements OnInit {

 //use router

   loggedUser =JSON.parse(localStorage.getItem('user') || '{}');
   


  
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.loggedUser.username);
  }

  //remove user from local storage
  logout(){
    localStorage.removeItem('user');
    alert('You have been logged out');
    this.loggedUser = !this.loggedUser;
  }

  


  
  

}
